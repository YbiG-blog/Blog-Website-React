import React from "react";
import "./sideBar.css";

const SideBar = () => {
  const imgLink = [
    "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
        src={imgLink[Math.floor(Math.random() * imgLink.length)]}
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
