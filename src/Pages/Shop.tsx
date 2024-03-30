import { Box, Card, CardContent, CardMedia, Grid, Typography, styled } from "@mui/material";
import ShopNavbar from "../Components/ShopNavbar";
import ShopSidebar from "../Components/ShopSidebar";

import image from "../Assets/c2067c6d72f4e337d958bfb07b18366b-removebg-preview.png";

const Contaner = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const SubContainer = styled(Box)`
    display: flex;
    flex-direction: row;
`;
const ShopItems = styled(Grid)`
    height: fit-content;
`;
const ShopItem = styled(Grid)``;
const ItemCard = styled(Card)`
    height: 340px;
    width: 250px;
    padding: 0;
`;

const CardImage = styled(CardMedia)`
    height: 70%;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;
const CardContents = styled(CardContent)`
    background: rgba(223, 218, 218, 1);
    height: 30%;
    padding: 0;
    .title {
        font-size: 20px;
        font-weight: 700;
    }
`;

const Shop = () => {
    return (
        <Contaner>
            <ShopNavbar />
            <SubContainer>
                <ShopSidebar />
                <ShopItems container spacing={2}>
                    <ShopItem item xs={12} sm={6} lg={3}>
                        <ItemCard>
                            <CardImage></CardImage>
                            <CardContents>
                                <div className="title_size">
                                    <Typography className="title">Black Pants</Typography>
                                </div>
                            </CardContents>
                        </ItemCard>
                    </ShopItem>
                </ShopItems>
            </SubContainer>
        </Contaner>
    );
};

export default Shop;
