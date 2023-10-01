import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

const topBar = () => {
  const style = { textDecoration: "none", color: "inherit" };
  return (
    <div className="top">
      <div className="topLeft">
        <i class="leftIcon fa-brands fa-linkedin"></i>
        <i class="leftIcon fa-brands fa-github"></i>
        <i class="leftIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topMiddle">
        <ul>
          <li className="list">
            <Link to="/" style={style}>
              Home
            </Link>
          </li>
          <li className="list">
            <Link to="/blogs" style={style}>
              Blog
            </Link>
          </li>
          <li className="list">
            <Link to="/writeBlog" style={style}>
              Write
            </Link>
          </li>
          <li className="list">
            <Link to="/contact" style={style}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link to="/setting">
          <img
            className="topImg"
            src="https://frontendehubbucket.s3.ap-south-1.amazonaws.com/frontend/profile/dashboard/default_profile_icon.png"
            alt=""
          />
        </Link>
        <i class="rightIcon fa-solid fa-magnifying-glass"></i>
        {/* <Link to="/writeBlog">
          <i class="rightIcon fa-solid fa-right-from-bracket"></i>
        </Link> */}
      </div>
    </div>
  );
};

export default topBar;
