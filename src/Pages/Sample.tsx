import React from "react";
import MainNavbar from "../Components/roots/MainNavbar";
import { Stack } from "@mui/material";
import HeroSection from "../Components/Home/HeroSection";
import StorySection from "../Components/Home/StorySection";

const Sample = () => {
    return (
        <div>
            <MainNavbar />
            <HeroSection/>
            <StorySection/>
        </div>
    );
};

export default Sample;
