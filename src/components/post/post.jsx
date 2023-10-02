import React from "react";
import { useNavigate } from "react-router-dom";

import "./post.css";

const Post = ({ img, index }) => {

  const navigate = useNavigate();
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              #Life
          </span>
          <span className="postCat">
            #Sport
          </span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
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
      <button className="view-btn" onClick={()=>{
        navigate(`/singlePost?index=${index}`);
      }}>View</button>
    </div>
  );
};

export default Post;
