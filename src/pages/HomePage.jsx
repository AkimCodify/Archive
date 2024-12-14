import React from 'react';
import DrivingSchool from '../components/HomePage/DrivingSchool';
import Footer from '../components/HomePage/Footer';
import Header from '../components/HomePage/Header';
import UsefulArticles from '../components/HomePage/UsefulArticles';
import HeroSection from '../components/HomePage/HeroSection';
import Statistics from '../components/HomePage/Statistics';
import Materials from '../components/HomePage/Materials';
import InstructorProfile from '../components/HomePage/InstructorProfile';

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Statistics/>
            <InstructorProfile/>
            <Materials/>
            <UsefulArticles/>
            <DrivingSchool/>
            <Footer/>
        </>
    )
};

export default HomePage;