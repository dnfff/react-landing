import React from 'react'
import Header from './Header/Header.jsx';
import "./Home.css";
import Slider from './1stPage/1stPage.jsx';

function Home() {
  return (
  <div className='center'>
    <div className='content'>
        <Header />
        <Slider />
    </div>  
  </div>
  )
}

export default Home;