import React, { useEffect } from "react";
import { Stack, Box, Typography, IconButton, Button, Card, CardContent, CardMedia } from "@mui/material";
import { FaRegRegistered } from "react-icons/fa";
import HamburgerBar from "../Components/HamburgerBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId')
    const userToken = localStorage.getItem('userToken')

    const getInCartHandler =async() =>{
        try {
            const response = await axios.get(`https://ecommerce-api.bridgeon.in/users/${userId}/cart`,{
                headers : {
                    Authorization: `Bearer ${userToken}`
                }
            })
            console.log(response.data.data.products[0].cart);
                        
        } catch (error) {
            
        }
    }

    useEffect(() =>{
        getInCartHandler()
    },[])

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

            <Stack className="CartContent" direction={"row"} sx={{ justifyContent: "space-around" }}>
                <Box className="CartProductList" sx={{ width: "auto", height: "89vh", backgroundColor: "re" }}>
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
                                    width: "100%",
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
                                        padding:".3rem 1rem"
                                        ,
                                        fontSize: "13px",
                                        fontFamily: "inherit",
                                        color: "black",
                                        fontWeight: "700",
                                        backgroundColor: "#d9d9d9",
                                        borderRadius: "81px",
                                        textTransform: "uppercase", // Change to 'uppercase'
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
                    <Card
                        sx={{
                            width: "28rem",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            fontFamily: "Mina",
                            // padding:"0 5rem",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                                backgroundColor: "#E5E0E0",
                                padding: "2rem 2rem",
                                borderRadius:"20px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <Box sx={{alignSelf:"center"}}>
                                <Typography sx={{ fontFamily: "inherit", fontSize:"1.5rem", fontWeight:'700' }}>Price Details</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    borderBottom: "1px solid grey",
                                    paddingBottom: "2rem",
                                }}
                            >
                                <Box>
                                    <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>Price</Typography>
                                    <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>Discount</Typography>
                                    <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>Delivery Charge</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>$99.00</Typography>
                                    <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>$99.00</Typography>
                                    <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>$99.00</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>total amount</Typography>
                                <Typography sx={{ fontFamily: "inherit", fontSize:"1.1rem" }}>$99.00</Typography>
                            </Box>
                        </Box>
                        <Button
                            disableRipple
                            sx={{
                                padding: ".5rem 1rem",
                                fontFamily: "inherit",
                                fontSize: "15px",
                                color: "black",
                                fontWeight: "700",
                                backgroundColor: "#d9d9d9",
                                borderRadius: "81px",
                                textTransform: "uppercase",
                                alignSelf: "flex-end", // Change to 'uppercase'
                                "&:hover": {
                                    backgroundColor: "#a0a0a0",
                                    color: "white",
                                },
                            }}
                        >
                            check out
                        </Button>
                    </Card>
                </Box>
            </Stack>
        </Stack>
    );
};

export default Cart;
