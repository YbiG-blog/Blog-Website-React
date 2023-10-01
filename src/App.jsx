import React from 'react';
import TopBar from './components/topBar/topBar';
import Home from './pages/home/home';
import WriteBlog from './pages/writeBlog/writeBlog';
import Setting from './pages/setting/setting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/posts/posts';

import './App.css';

const  App = () =>{
  return (
    <>
    <Router>
    <TopBar/>
    {/* <Single/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Home/>}/>
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/writeBlog" element={<WriteBlog/>}/>
      <Route path="/post/:postId" element={<Posts/>}/>
      <Route path="*" element={<h1 style={{textAlign:"center", marginTop:"10%"}}>Page Not Found.</h1>}/>

    </Routes>
    </Router>
    </>
  )
}

export default App;
