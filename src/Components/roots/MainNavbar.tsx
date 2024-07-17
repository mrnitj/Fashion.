import React from "react";

import { AppBar, Box, Container, styled, Typography } from "@mui/material";
import HamburgerBar from "./HamburgerBar";

const Navbar = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "inter",
    height: "4rem",
    borderBottom: "1px solid grey",
}));
const Plus1 = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontFamily: "inherit",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
}));
const Lookbook = styled(Typography)(({ theme }) => ({
    fontFamily: "inherit",
    fontWeight: 700,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
    "&::after": {
        content: '"⌵"',
    },
}));
const Links = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        gap: "0.4rem",
    },
}));

const LinkItems = styled(Typography)(({ theme }) => ({
    fontFamily: "inherit",
    fontWeight: 700,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
}));
const MenuDots = styled(Box)(({ theme }) => ({}));

const MainNavbar = () => {
    return (
        <Navbar maxWidth={"lg"}>
            <Plus1>+1</Plus1>
            <Lookbook>Lookbook</Lookbook>
            <Links>
                <LinkItems>shop</LinkItems>
                <LinkItems>subscribe</LinkItems>
                <MenuDots>
                    <HamburgerBar />
                </MenuDots>
            </Links>
        </Navbar>
    );
};

export default MainNavbar;
