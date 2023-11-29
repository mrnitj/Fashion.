import React from "react";
import {
    Stack,
    Box,
    Typography,
    IconButton,
    Button,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { FaRegRegistered } from "react-icons/fa";
import HamburgerBar from "../Components/HamburgerBar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();

    return (
        <Stack className="CartMainStack" gap={6}>
            <Box
                className="Shop_Navbar"
                sx={{
                    backgroundColor: "lightblu",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "inter",
                }}
            >
                <Box
                    className="Shop_logo"
                    sx={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "0" }}
                >
                    <Box width={"100%"} sx={{}}>
                        <Box
                            className="Shop_logo_R"
                            fontSize={"1.5rem"}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                left: "145px",
                                top: "30px",
                            }}
                        >
                            <FaRegRegistered />
                        </Box>
                        <Typography
                            onClick={() => navigate("/")}
                            className="Home_fashion"
                            sx={{
                                fontSize: "3rem",
                                fontFamily: "Marko one",
                                fontWeight: "bold",
                                cursor: "pointer",
                                padding: "0",
                            }}
                        >
                            fashion.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        width: "auto",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "3rem",
                    }}
                >
                    <Typography
                        className="HomeNavP"
                        sx={{
                            fontSize: "1rem",
                            fontFamily: "inherit",
                            letterSpacing: "1rem",
                            height: "100%",
                            verticalAlign: "center",
                        }}
                    >
                        <HamburgerBar />
                    </Typography>
                </Box>
            </Box>

            <Stack className="CartContent" direction={'row'} sx={{ justifyContent: "space-around" }}>
                <Box className="CartProductList" sx={{ width: "auto", height: "89vh", backgroundColor: "red" }}>
                    <Card
                        sx={{
                            height: "10rem",
                            display: "flex",
                            background: "transparent",
                            width: "30rem !important",
                            alignSelf: "center",
                            boxShadow: "none",
                        }}
                    >
                        <CardMedia>
                            <img alt="" src={"./Assets/img2.png"} style={{ height: "100%", width: "200px" }} />
                        </CardMedia>
                        <CardContent
                            className="view_card_content"
                            sx={{
                                fontFamily: "Mina",
                                backgroundColor: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "rem",
                                width: "100%",
                            }}
                        >
                            <Typography sx={{ fontFamily: "inherit", fontWeight: "700", fontSize: "25px" }}>
                                black pants
                            </Typography>
                            <Box sx={{ fontFamily: "inherit", fontWeight: "700", fontSize: "20px" }}>
                                <IconButton>-</IconButton>
                                <input type="number" defaultValue={1} style={{ width: "45px" }} />
                                <IconButton>+</IconButton>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "80%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "700",
                                        fontFamily: "inherit",
                                        fontSize: "16px",
                                    }}
                                >
                                    $999
                                </Typography>
                                <Button
                                    disableRipple
                                    sx={{
                                        fontSize: "15px",
                                        fontFamily: "inherit",
                                        color: "black",
                                        fontWeight: "700",
                                        backgroundColor: "#d9d9d9",
                                        borderRadius: "81px",
                                        textTransform: "uppercase",  // Change to 'uppercase'
                                        "&:hover": {
                                            backgroundColor: "#a0a0a0",
                                            color: "white",
                                        },
                                    }}
                                >
                                    remove
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box className="CartPriceDtails">
                    <Card sx={{ width: '30rem', height: 'auto', display:"flex", flexDirection:"column", gap:'2rem', backgroundColor:'transparent', boxShadow:'none' }}>
                        <Box sx={{display:"flex", flexDirection:"column", gap:"2rem", backgroundColor:"#E5E0E0", padding:"2rem 0"}}>


                        <Box>
                            <Typography>Price Details</Typography>
                        </Box>
                        <Box sx={{display:"flex", justifyContent:"space-between", borderBottom:'1px solid grey', paddingBottom:"2rem"}}>
                            <Box>
                                <Typography>Price</Typography>
                                <Typography>Discount</Typography>
                                <Typography>Delivery Charge</Typography>
                            </Box>
                            <Box>
                                <Typography>$99.00</Typography>
                                <Typography>$99.00</Typography>
                                <Typography>$99.00</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Typography>total amount</Typography>
                            <Typography>$99.00</Typography>
                        </Box>
                        </Box>
                    <Button
                                    disableRipple
                                    sx={{
                                        fontSize: "15px",
                                        fontFamily: "inherit",
                                        color: "black",
                                        fontWeight: "700",
                                        backgroundColor: "#d9d9d9",
                                        borderRadius: "81px",
                                        textTransform: "uppercase", 
                                        alignSelf:"flex-end",// Change to 'uppercase'
                                        "&:hover": {
                                            backgroundColor: "#a0a0a0",
                                            color: "white",
                                        },
                                    }}
                                >
                                    remove
                                </Button>
                    </Card>
                </Box>
            </Stack>
        </Stack>
    );
};

export default Cart;
