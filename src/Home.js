import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import FeatureProducts from './components/featureProducts';
import footer from './components/Footer';
const Home = () => {
  return (
    <>
    <HeroSection title="PopShop" />
    <Services />
    <FeatureProducts />
    <footer/>
    </>
    )
}


export default Home;