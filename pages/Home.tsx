import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Calculator from '../components/Calculator';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <Calculator />
            <Contact />
        </>
    );
};

export default Home;
