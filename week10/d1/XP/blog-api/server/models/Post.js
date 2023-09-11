const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'w10',
    password: 'test',
    port: '',
});

class Post {
    static async getAllPosts() {
        const query = 'SELECT * FROM posts';
        const { rows } = await pool.query(query);
        return rows;
    }

    static async getPostById(id) {
        const query = 'SELECT * FROM posts WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }

    static async createPost(title, content) {
        const query = 'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *';
        const { rows } = await pool.query(query, [title, content]);
        return rows[0];
    }

    static async updatePost(id, title, content) {
        const query = 'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *';
        const { rows } = await pool.query(query, [title, content, id]);
        return rows[0];
    }

    static async deletePost(id) {
        const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
}

module.exports = Post;
