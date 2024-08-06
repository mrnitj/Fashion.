import React from "react";
import { Box, Breadcrumbs, Container, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FilterBox from "./FilterBox";

const MainContainer = styled(Box)(({ theme }) => ({
    height: "200vh",
    width: "100%",
}));

const FilterContainer = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: "4rem",
    zIndex: 1,
}));

const Products = () => {
    return (
        <MainContainer>
            <FilterContainer>
                <FilterBox />
            </FilterContainer>
        </MainContainer>
    );
};

export default Products;
