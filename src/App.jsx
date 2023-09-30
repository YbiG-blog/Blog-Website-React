import React from 'react';
import TopBar from './components/topBar/topBar';
import Home from './pages/home/home';
import Single from './pages/single/single';
import './App.css';

const  App = () =>{
  return (
    <>
    <TopBar/>
    {/* <Home/> */}
    <Single/>
    </>
  )
}

export default App;
