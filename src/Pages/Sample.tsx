import React from "react";
import MainNavbar from "../Components/roots/MainNavbar";
import { Stack } from "@mui/material";
import HeroSection from "../Components/Home/HeroSection";
import StorySection from "../Components/Home/StorySection";
import Footer from '../Components/roots/Footer'

const Sample = () => {
    return (
        <div>
            <MainNavbar />
            <HeroSection />
            <StorySection />
            <Footer/>
        </div>
    );
};

export default Sample;
