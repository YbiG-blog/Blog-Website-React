import React from "react";
import { a } from "react-router-dom";

import "./post.css";

const Posts = () => {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <a className="a" to="/posts?cat=Music">
              #Life
            </a>
          </span>
          <span className="postCat">
            <a className="a" to="/posts?cat=Music">
            #Sport
            </a>
          </span>
        </div>
        <span className="postTitle">
          <a to="/post/abc" className="a">
            Lorem ipsum dolor sit amet.
          </a>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postContent">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Posts;
