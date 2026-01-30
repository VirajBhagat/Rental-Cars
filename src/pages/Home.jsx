import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Cars from '../components/Cars';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cars />
      <Footer />
    </>
  )
}

export default Home;