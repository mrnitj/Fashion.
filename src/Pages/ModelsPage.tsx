import "../Pages/ModelsPage.css";


import { ModelData } from "../ModelDatas";
import { Stack, Box, Typography, Card, CardMedia, CardContent, Button, IconButton } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { useState } from "react";

const ModelsPage = () => {
    const [models, setModels] = useState<number>(3);
    const [vis, setVis] = useState<string>("none");

    const moreHandler = () => {
        setModels(models + models);
        setVis("");
    };
    const resetHandler = () => {
        setModels(3);
        setVis("none");
    };

    const slice = ModelData.slice(0, models);

    return (
        <Stack alignItems={"center"} spacing={2}>
            <Typography variant="h4" sx={{ fontFamily: "Mina", fontWeight: "700", letterSpacing: ".3rem" }}>
                MODELS
            </Typography>

            <Box
                className='Model_Main_Box'
                sx={{
                    backgroundColor: "lightblue",
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 3rem 0",
                    position: "relative",
                }}
            >
                {/* <Paper elevation={24}> */}

                {slice.map((data, index) => (
                    <>
                        {index % 2 == 0 && (
                            <Card
                                className="Model_card"
                                style={{
                                    display: "flex",
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                    width: "70%",
                                    height: "14rem",
                                    
                                }}
                            >
                                <CardMedia className="Model_card_Media" component={"img"} height={"100%"} style={{ width: "200px" }} image={data.img} />
                                <Stack className="Model_card_stack" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <CardContent 
                                className="Model_card_content"
                                    
                                    >
                                        <Typography
                                className="Model_card1_content_P"

                                            variant="body2"
                                            color={"text.secondary"}
                                            width={"100%"}
                                            fontSize={"18px"}
                                            fontFamily={"Mina"}
                                            fontWeight={"700"}
                                            sx={{ color: "black", paddingRight: "6rem" }}
                                        >
                                            {data.desc}
                                        </Typography>
                                    </CardContent>
                                </Stack>
                            </Card>
                        )}
                        {index % 2 != 0 && (
                            <Card
                            className="Model_card"

                                style={{
                                    display: "flex",
                                    backgroundColor: "transparent",
                                    boxShadow: "none",
                                    width: "70%",
                                    alignSelf: "end",
                                    height: "14rem",
                                }}
                            >
                                <Stack className="Model_card_stack" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <CardContent 
                                        className="Model_card_content"
                                    >
                                        <Typography
                                        className="Model_card2_content_P"

                                            variant="body2"
                                            color={"text.secondary"}
                                            width={"100%"}
                                            fontSize={"18px"}
                                            fontFamily={"Mina"}
                                            fontWeight={"700"}
                                            sx={{ color: "black", paddingLeft: "6rem" }}
                                        >
                                            {data.desc}
                                        </Typography>
                                    </CardContent>
                                </Stack>
                                <CardMedia className="Model_card_Media" component={"img"} height={"100%"} style={{ width: "200px" }} image={data.img} />
                            </Card>
                        )}
                    </>
                ))}

                <Button
                    onClick={moreHandler}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "15px",
                        marginTop: "6rem",
                        color: "black",
                        width: "5rem",
                        alignSelf: "center",
                    }}
                >
                    More
                    <ExpandMoreIcon sx={{ position: "relative", bottom: "20px", fontSize: "50px" }} />
                </Button>
                <Box sx={{ position: "absolute", bottom: "70px", right: "0px", display: vis }}>
                    <IconButton size="large" onClick={resetHandler}>
                        <ExpandLessIcon sx={{ fontSize: "3rem" }} />
                    </IconButton>
                </Box>
            </Box>

            <div style={{ borderBottom: "1px solid gray", width: "60%", margin: "0 auto" }} />
        </Stack>
    );
};

export default ModelsPage;
