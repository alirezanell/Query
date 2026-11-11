import { useState } from "react";

interface NewPost {
  title: string;
  body: string;
}

async function createPost(newPost: NewPost) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return res.json();
}

function MutationExample() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="section">
      <h2>2. Mutations</h2>
      <p>Mutations are used to create, update, or delete data.</p>

      <input
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={() => createPost({ title, body })}>Create Post</button>
    </div>
  );
}

export default MutationExample;
