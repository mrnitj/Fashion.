import "../Styles/Shop.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HamburgerBar from "../Components/HamburgerBar";
import { useNavigate } from "react-router-dom";
import { FaRegRegistered } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

import {
    Stack,
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useEffect, useState } from "react";

const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const navigate = useNavigate();

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get("https://ecommerce-api.bridgeon.in/products?accessKey=b5e90860cce3874bdd3b");
            console.log(response.data.data);
            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <Stack className="ShopMainStack" sx={{ height: "200vh" }} spacing={6}>
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
                    sx={{ display: "flex", justifyContent: "center", flexDirection: "column", paddin: "0" }}
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
                        onClick={() => navigate("/cart")}
                        className="HomeNavP"
                        fontFamily={"inherit"}
                        sx={{
                            cursor: "pointer",
                            transition: "scale 0.15s, color 0.15s",

                            "&:hover": {
                                color: "grey",
                                scale: "1.1",
                                transition: "scale 0.15s, color 0.15s",
                            },
                        }}
                    >
                        CART
                    </Typography>
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

            {/* ----------------------- */}

            <Stack
                className="shopContent"
                direction={"row"}
                spacing={6}
                sx={{ height: "100%", padding: "0 5rem", backgroundColor: "blu" }}
            >
                <Box className="sidebarBox" sx={{ backgroundColor: "re", padding: "0", height: "auto" }}>
                    <Box
                        className="sidebar_content"
                        sx={{
                            backgroundColor: "aqu",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "auto",
                            width: "auto",
                            position: "sticky",
                            top: "0",
                            padding: "0",
                        }}
                    >
                        <Box
                            className="checkboxes"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "3rem",
                            }}
                        >
                            <Box sx={{ backgroundColor: "gree", height: "auto" }}>
                                <Typography sx={{ fontFamily: "Mina" }}>FILTER</Typography>

                                <Box
                                    sx={{
                                        height: "auto",
                                        display: "flex",
                                        width: "200px",
                                        flexDirection: "column",
                                        padding: "1rem 0 0 2rem ",
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",
                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "black",
                                                    },
                                                }}
                                            />
                                        }
                                        label="Black"
                                        sx={{
                                            // height:'22px',

                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "blue",
                                                    },
                                                }}
                                            />
                                        }
                                        label="Blue"
                                        sx={{
                                            // height:'22px',
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",
                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="Grey"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "green",
                                                    },
                                                }}
                                            />
                                        }
                                        label="Green"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box className="reating" sx={{ backgroundColor: "viole", height: "auto", width: "100%" }}>
                                <Typography sx={{ fontFamily: "Mina" }}>RATING</Typography>

                                <Box
                                    sx={{
                                        height: "auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100% !important",
                                        padding: "1rem 0 0 2rem ",
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",
                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="4★ & above"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="3★ & above"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="2★ & above"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="1★ & above"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box className="reating" sx={{ backgroundColor: "viole", height: "auto", width: "100%" }}>
                                <Typography sx={{ fontFamily: "Mina" }}>OFFERS</Typography>

                                <Box
                                    sx={{
                                        height: "auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100% !important",
                                        padding: "1rem 0 0 2rem ",
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",
                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="30% or more"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="40% or more"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="50% or more"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    padding: "0",

                                                    color: "grey",
                                                    "&.Mui-checked": {
                                                        color: "grey",
                                                    },
                                                }}
                                            />
                                        }
                                        label="60% or more"
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontFamily: "Mina",
                                                fontSize: "14px",
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="ShopMainBox" sx={{ display: "flex", flexWrap: "wrap", gap: "2rem 1rem" }}>
                    {/* -------------------- */}
                    {products.map((product) => (
                        <Card
                            key={product._id}
                            sx={{
                                backgroundColor: "transparent",
                                width: "15rem",
                                height: "362px",
                                boxShadow: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                transition: "transform 0.2s ease-in-out", // Add transition for smooth scaling
                                ":hover": {
                                    transform: "scale(1.02)", // Scale on hover
                                    cursor:'pointer'
                                },
                            }}
                        >
                            <CardMedia
                            onClick={() => navigate(`/view/${product._id}`)}

                                className="ShopCardmedia"
                                sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                                image={product.image}
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
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                        <ul className="ul">
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
                                    <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>
                                        {product.price}
                                    </Typography>
                                    <Checkbox
                                        icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                        checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    ))}

                    {/* -------------------- */}
                </Box>
            </Stack>

            {/* <Footer /> */}
        </Stack>
    );
};

export default Shop;
