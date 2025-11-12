import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServiceSection from '../components/home/ServiceSection';
import Testimonials from '../components/home/Testimonials';
import PortfolioSection from '../components/home/PortfolioSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Testimonials />
      <PortfolioSection />
      <CTASection />
    </>
  );
};

export default Home;

