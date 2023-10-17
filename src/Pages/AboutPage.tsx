import "../Styles/AboutPage.css";

import { Stack, Box, Typography } from "@mui/material";
import { FaRegRegistered } from "react-icons/fa";

const AboutPage = () => {
    return (
        <Stack className="About_Main_Stack" alignItems={"center"} spacing={2}>
            <Typography
                className="About_h"
                variant="h4"
                sx={{ fontFamily: "Mina", fontWeight: "700", letterSpacing: ".3rem" }}
            >
                ABOUT
            </Typography>

            <Box className="About_Main_Box" sx={{ backgroundColor: "aqu", height: "50vh" }}>
                <Box
                    className="About_Main_Box2"
                    sx={{
                        display: "flex",
                        justifyContent: "center    ",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "re",
                        height: "100%",
                    }}
                >
                    <Box
                        className="About_logo_box"
                        width={"50%"}
                        sx={{
                            position: "relative",
                            zIndex: "1",
                            backgroundColor: "lightblu",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Typography
                            className="logo_box_typo"
                            sx={{ fontSize: "4.5rem", fontFamily: "Marko one", fontWeight: "bold" }}
                        >
                            <Box
                                className="R_logo"
                                fontSize={"2rem"}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    position: "relative",
                                    left: "220px",
                                    top: "40px",
                                }}
                            >
                                <FaRegRegistered />
                            </Box>
                            fashion.
                            <Typography
                                className="logo_box_typo_sub"
                                width={"100%"}
                                textAlign={"left"}
                                fontFamily={"inter"}
                                letterSpacing={"0.3rem"}
                                fontWeight={500}
                                fontSize={"0.6rem"}
                            >
                                CRAFTED COLLECTION
                            </Typography>
                        </Typography>
                    </Box>

                    <Box
                        className="About_Box_content"
                        sx={{
                            width: "50%",
                            height: "inherit",
                            backgroundColor: "lightgoldenrodyello",
                            display: "flex",
                            alignItems: "end",
                            paddingBottom: "3rem",
                        }}
                    >
                        <Typography
                            className="About_Box_content_P"
                            sx={{ fontSize: "25px", width: "80%", fontFamily: "Mina", fontWeight: "700" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo inventore officia. Totam
                            voluptate, sunt fugiat tempore laborum beatae natus.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <div style={{ borderBottom: "1px solid gray", width: "60%", margin: "0 auto" }} />
        </Stack>
    );
};

export default AboutPage;
