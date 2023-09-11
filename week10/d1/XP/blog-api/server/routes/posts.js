// server/routes/posts.js

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all blog posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.getAllPosts();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a specific blog post by ID
router.get('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.getPostById(postId);
        if (!post) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST create a new blog post
router.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await Post.createPost(title, content);
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT update an existing blog post
router.put('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    try {
        const updatedPost = await Post.updatePost(postId, title, content);
        if (!updatedPost) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a blog post
router.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const deletedPost = await Post.deletePost(postId);
        if (!deletedPost) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.json(deletedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
