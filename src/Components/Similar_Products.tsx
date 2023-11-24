import '../Styles/SimilarProducts.css'

import { Stack, Box, Typography, Card, CardMedia, CardContent, Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SimilarProducts = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Stack>
            <Typography>SIMILAR PRODUCTS</Typography>
            <Carousel responsive={responsive}>
                <div className="caroselContent" style={{ width: "15rem" }}>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            width: "100%", // Set the width of the Card to 100%
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul className='ul'>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </Stack>
    );
};

export default SimilarProducts;
