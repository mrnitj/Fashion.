import React from "react";

import { AppBar, Box, Container, styled, Typography } from "@mui/material";
import HamburgerBar from "./HamburgerBar";

const Navbar = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));
const Plus1 = styled(Typography)(({ theme }) => ({}));
const Lookbook = styled(Typography)(({ theme }) => ({}));
const Links = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
}));

const LinkItems = styled(Typography)(({ theme }) => ({}));
const MenuDots = styled(Box)(({ theme }) => ({}));

const MainNavbar = () => {
    return (
        <Navbar maxWidth="lg">
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
