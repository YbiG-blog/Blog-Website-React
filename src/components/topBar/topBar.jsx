import React from "react";
import "./topBar.css";

const topBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="leftIcon fa-brands fa-linkedin"></i>
        <i class="leftIcon fa-brands fa-github"></i>
        <i class="leftIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topMiddle">
        <ul>
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Contact</li>
          <li className="list">Blog</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"
          src="https://frontendehubbucket.s3.ap-south-1.amazonaws.com/frontend/profile/dashboard/default_profile_icon.png"
          alt=""
        />
        <i class="rightIcon fa-solid fa-magnifying-glass"></i>
        <i class="rightIcon fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default topBar;
