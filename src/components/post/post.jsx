import React from "react";

import "./post.css";

const Post = ({ img }) => {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
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

export default Post;
