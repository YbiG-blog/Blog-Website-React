import React from "react";
import Post from "../post/post";
import "./posts.css";

const Posts = () => {
  const photosArray = [1,2,3,4,5];
  return (
    <div className="posts">
      {photosArray.map((idx) => (
        <Post index = { idx } key={ idx }/>
      ))}
    </div>
  );
};

export default Posts;
