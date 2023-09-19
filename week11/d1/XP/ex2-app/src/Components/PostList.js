import React from "react";
import data from "./data.json";

function PostList() {
    return (
        <div>
            {data.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;
