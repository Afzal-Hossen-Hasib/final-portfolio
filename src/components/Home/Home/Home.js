import React from 'react';
import About from '../../About/About';
import Contact from '../Contact/Contact';
import HeroSection from '../HeroSection/HeroSection';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;