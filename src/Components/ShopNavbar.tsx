import "../Styles/Shop.css";
import { styled, Box, Typography } from "@mui/material";

import logo from "../Assets/fashionlogo.png";
import HamburgerBar from "./roots/HamburgerBar";

const Container = styled(Box)`
    height: 55px;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
`;
const Logo = styled(Box)`
    /* background: aqua; */
    height: 100%;
    width: 300px;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        height: 150px;
        top: -40px;
        left: 10px;
    }
`;
const Navigations = styled(Box)`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    .cart {
        font-size: 23px;
        font-weight: 700;
    }
`;

const ShopNavbar = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Navigations>
                <Typography className="cart">cart</Typography>
                <HamburgerBar />
            </Navigations>
        </Container>
    );
};

export default ShopNavbar;
