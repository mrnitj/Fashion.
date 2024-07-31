import { Box, Container, FormControl, Grid, InputBase, InputLabel, styled, Typography } from "@mui/material";
import React from "react";
import SignupImg from "../Assets/Signup.png";

const MainContainer = styled(Container)(({ theme }) => ({
    overflow: "hidden",
}));
const LogoContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    zIndex: -1,
}));
const Logo = styled(Box)(({ theme }) => ({}));
const Typo = styled(Box)(({ theme }) => ({
    fontSize: "18rem",
    fontFamily: "Marko One",
    fontWeight: "bold",
    position: "relative",
    display: "inline-block",
    color: "#00000013",
    userSelect:'none',
    [theme.breakpoints.down("md")]: {
        fontSize: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "5rem",
    },
    "&::after": {
        content: '"\\00AE"',
        position: "absolute",
        top: "0.2em",
        right: "0em",
        fontSize: "0.35em",
    },
}));

const SignUpContainer = styled(Box)(({ theme }) => ({
    zIndex: 1,
}));
const GridContainer = styled(Grid)(({ theme }) => ({}));
const GridItem = styled(Grid)(({ theme }) => ({
    // background:'yellow'
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    
}));
const TexFieldContainer = styled(Box)(({ theme }) => ({
    height:'100%',
    width:'100%',
    display:'flex',
    alignItems:'center'
}));

const CustomFormContrroll = styled(FormControl)(({theme})=>({
    width:'100%',
    

}))
const Labels = styled(Typography)(({ theme }) => ({}));
const Inputs = styled(Box)(({ theme }) => ({
    height:"2rem",
    border:'1px solid black',
    width:'100%'
}));

const SignUp = () => {
    return (
        <MainContainer maxWidth={"lg"}>
            <LogoContainer>
                <Logo>
                    <Typo>fashion.</Typo>
                </Logo>
            </LogoContainer>
            <SignUpContainer>
                <GridContainer container spacing={2}>
                    <GridItem item xs={12} md={6}>
                        <ImageContainer>
                            <img src={SignupImg} alt="signupimage" />
                        </ImageContainer>
                    </GridItem>
                    <GridItem item xs={12} md={6}>
                        <TexFieldContainer>
                            <CustomFormContrroll>
                                <Labels component='label'>User name</Labels>
                                <Inputs><InputBase placeholder="username"/></Inputs>
                                <Labels component='label'>User name</Labels>
                                <Inputs><InputBase/></Inputs>
                                <Labels component='label'>User name</Labels>
                                <Inputs><InputBase/></Inputs>
                                <Labels component='label'>User name</Labels>
                                <Inputs><InputBase/></Inputs>
                                <Labels component='label'>User name</Labels>
                                <Inputs><InputBase/></Inputs>
                            </CustomFormContrroll>
                        </TexFieldContainer>
                    </GridItem>
                </GridContainer>
            </SignUpContainer>
        </MainContainer>
    );
};

export default SignUp;
