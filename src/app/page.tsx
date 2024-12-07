import React from 'react'
// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Flash from './components/Flash';
import Category from './components/Category';
import Selling from './components/Selling';
import Music from './components/Music';



const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <HeroSection/>
      <Flash/>
      <Category/>
      <Selling/>
      <Music/>
     
    </div>
  )
}

export default Home;
