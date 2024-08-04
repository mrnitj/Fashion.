import React from "react";
import { Box, Breadcrumbs, Container, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MainContainer = styled(Box)(({ theme }) => ({
    height: "200vh",
    width: "100%",
}));

const FilterContainer = styled(Container)(({ theme }) => ({
    height:'3.6rem',
    background:'#e7e4e4',
    display:'flex',
    alignItems:'center',
    position:'sticky',
    top:'4rem',
    zIndex:1
}));
const NewBox = styled(Box)(({ theme }) => ({}));
const Links = styled(Typography)(({theme})=>({
    textDecoration:'none',
    color:'black'

}));

const FiltersBox = styled(Box)(({ theme }) => ({
}));

const Products = () => {
    return (
        <MainContainer>
            <FilterContainer maxWidth='xl'>
                <NewBox>
                    <Breadcrumbs>
                        <Links component={Link}>Men</Links>
                        <Links component={Link}>New</Links>
                    </Breadcrumbs>
                </NewBox>
                <FiltersBox />
            </FilterContainer>
        </MainContainer>
    );
};

export default Products;
