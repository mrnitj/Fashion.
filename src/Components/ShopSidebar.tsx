import { Box, styled, Typography, FormControlLabel, Checkbox, List } from "@mui/material";
import React from "react";

const Container = styled(Box)`
    height: 100vh;
    width: 20em;
    background: red;
    padding: 0;
    position: sticky;
`;

const Sidebar = styled(Box)`
    height: 100%;
    width: 100%;
    background-color: aqua;
    padding: 0;
`;

const FilerBox = styled(Box)``;
const FilterList = styled(List)``;

const ShopSidebar = () => {
    return (
        <Container>
            <Sidebar>
                <FilerBox>
                    <FilterList></FilterList>
                </FilerBox>
            </Sidebar>
        </Container>
    );
};

export default ShopSidebar;
