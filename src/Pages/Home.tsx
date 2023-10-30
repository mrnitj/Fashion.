import "../Styles/Home.css";

import { Stack, Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { FaRegRegistered } from "react-icons/fa";
import ModelsPage from "./ModelsPage";
import AboutPage from "./AboutPage";
import Footer from "../Components/Footer";
import HamburgerBar from "../Components/HamburgerBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Stack direction={"column"}>
                <Box
                    className="Home_Navbar"
                    sx={{
                        backgroundColor: "lightblu",
                        height: "3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontFamily: "inter",
                    }}
                >
                    <IconButton size="small" sx={{ fontFamily: "inherit" }}>
                        +1
                    </IconButton>
                    <Typography
                        className="HomeNavP"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "scale 0.15s, color 0.15s",

                            "&:hover": {
                                color: "grey",
                                scale: "1.1",
                                transition: "scale 0.15s, color 0.15s",
                            },
                        }}
                        fontFamily={"inherit"}
                    >
                        LOOKBOOK{" "}
                        <span>
                            {/* {" "} */}
                            <KeyboardArrowDownIcon fontSize="large" />
                        </span>
                    </Typography>
                    <Box sx={{ display: "flex", width: "20rem", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                            onClick={() => navigate("/shop")}
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
                            SHOP
                        </Typography>
                        <Typography
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
                            SUBSCRIBE
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

                <Stack className="Home_content" sx={{}}>
                    <Box
                        className="Home_content_box"
                        sx={{
                            height: "90vh",
                            backgroundColor: "lighgray",
                            display: "flex",
                            padding: "0",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            className="Home_logo"
                            sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
                        >
                            <Box width={"100%"} sx={{ position: "relative" }}>
                                <Box
                                    className="Home_logo_R"
                                    fontSize={"2.5rem"}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        position: "relative",
                                        left: "300px",
                                        top: "60px",
                                    }}
                                >
                                    <FaRegRegistered />
                                </Box>
                                <Typography
                                    className="Home_fashion"
                                    sx={{ fontSize: "6rem", fontFamily: "Marko one", fontWeight: "bold" }}
                                >
                                    fashion.
                                </Typography>
                                <Typography
                                    className="Home_subtitle"
                                    width={"100%"}
                                    textAlign={"left"}
                                    fontFamily={"inter"}
                                    letterSpacing={"0.3rem"}
                                    fontWeight={500}
                                    fontSize={"1rem"}
                                >
                                    CRAFTED COLLECTION
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="hero">
                            <img src="src\Assets\fashionjpg-removebg-preview.png" alt="" />
                        </Box>
                        <Box className="hero_right">
                            <Box className="hero_right_content" sx={{ marginRight: "2rem" }}>
                                <Typography
                                    className="one"
                                    sx={{
                                        transform: "rotate(90deg)",
                                        fontWeight: "700",
                                        fontSize: "63px",
                                        fontFamily: "Mina",
                                    }}
                                >
                                    001
                                </Typography>
                                <Typography className="two" sx={{ fontFamily: "Mina", fontSize: "1rem" }}>
                                    light up <br />
                                    your
                                    <br /> future
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
                <div style={{ borderBottom: "1px solid gray", width: "60%", margin: "0 auto" }}></div>
            </Stack>
            <ModelsPage />
            <AboutPage />
            <Footer />
        </>
    );
};

export default Home;
