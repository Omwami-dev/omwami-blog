import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts/")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.category.name}</p>
        </div>
      ))}
    </div>
  );
}
