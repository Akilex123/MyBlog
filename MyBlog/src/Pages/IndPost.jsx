import React from "react";
import { useParams } from "react-router-dom";

function IndPost({ post }) {
  const { id } = useParams();
  const posts = post[id];

  if (!posts) {
    return <div className="text-black p-4">Post Not Found</div>;
  }

  return (
    <div className="p-4">
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
    </div>
  );
}

export default IndPost;
