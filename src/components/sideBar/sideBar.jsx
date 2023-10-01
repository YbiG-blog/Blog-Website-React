import React from "react";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla
          labore nostrum, iste veritatis quae officiis? Voluptatibus incidunt,
          expedita suscipit commodi quas debitis culpa odit nam error repellat
          cumque alias quod, voluptate eligendi? Cumque doloremque, magnam ab
          alias deserunt reprehenderit libero eius voluptas! Eaque, blanditiis!
          Perspiciatis odio corrupti, velit nihil voluptatibus dolor soluta
          neque, rem asperiores molestiae consectetur delectus id obcaecati
          modi.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Category</span>
         <ul>
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Coding</li>
            <li className="sidebarListItem">Hackathon</li>
            <li className="sidebarListItem">Music</li>
         </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Category</span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-linkedin"></i>
        <i class="sidebarIcon fa-brands fa-github"></i>
        <i class="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
    
  );
};

export default SideBar;
