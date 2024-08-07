import React from "react";
import { Box, Breadcrumbs, Container, Grid, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FilterBox from "./FilterBox";

const MainContainer = styled(Box)(({ theme }) => ({
    minheight: "200vh",
    width: "100%",
}));

const FilterContainer = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: "4rem",
    zIndex: 1,
}));

const ProductContainer =styled(Box)(({theme})=>({}))
const GridContainer =styled(Grid)(({theme})=>({}))
const GridItem =styled(Grid)(({theme})=>({}))

const ItemCard = styled(Box)(({theme})=>({
    background:'blue',
    maxHeight:"250px",
    overflow:'hidden',
    maxWidth:'250px',
    minWidth:"250px"
}))

const Products = () => {
    return (
        <MainContainer>
            <FilterContainer>
                <FilterBox />
            </FilterContainer>
            <ProductContainer>
                <GridContainer container spacing={2} p={2}>
                    <GridItem item xs={6} md={3} xl={2}>
                        <ItemCard>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sit iure vero autem itaque odio soluta et eaque voluptates vel. Eveniet architecto ut facilis dignissimos. Fugiat necessitatibus eligendi atque at eos, illum officia dolor quidem vitae recusandae voluptatibus saepe excepturi, optio sint dolorum odio laudantium, itaque tempora eveniet doloremque distinctio!
                        </ItemCard>
                    </GridItem>
                   
                </GridContainer>
            </ProductContainer>
        </MainContainer>
    );
};

export default Products;
