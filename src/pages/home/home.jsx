import React from "react";
import Header from '../../components/header/header';
import SideBar from "../../components/sideBar/sideBar";
import Posts from "../../components/posts/posts";   

import "./home.css";

const Home = () => {
  return(
    <>
    <Header />
    <div className="home">
    <Posts/>
    <SideBar/>
    </div>
    </>
  )
};

export default Home;
