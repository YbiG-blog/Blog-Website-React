import React from "react";
import { useNavigate } from "react-router-dom";

import "./post.css";

const Post = ({ index }) => {
  const imgLink = [
    "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  const blogTitles = [
    "JavaScript Tips and Tricks",
    "Python Power Guide",
    "Efficient Code Debugging Strategies",
    "Responsive Web App Development",
    "Data Science Beginner's Journey",
    "Secure Coding Best Practices"
  ]
  const navigate = useNavigate();
  return (
    <div className="post">
      <img className="postImg" src={imgLink[index]} alt="" />
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
            {blogTitles[index]}
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
