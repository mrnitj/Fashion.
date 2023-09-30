import "./Home.css";

import { Stack, Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { FaRegRegistered } from "react-icons/fa";

const Home = () => {
    return (
        <Stack direction={"column"}>
            <Box
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
                <Typography sx={{}} fontFamily={"inherit"}>
                    LOOKBOOK{" "}
                    <span>
                        <IconButton>
                            {" "}
                            <KeyboardArrowDownIcon fontSize="large" />
                        </IconButton>
                    </span>
                </Typography>
                <Box sx={{ display: "flex", width: "20rem", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography fontFamily={"inherit"}>SHOP</Typography>
                    <Typography fontFamily={"inherit"}>SUBSCRIBE</Typography>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            fontFamily: "inherit",
                            letterSpacing: "1rem",
                            height: "100%",
                            verticalAlign: "center",
                        }}
                    >
                        <MoreHorizIcon sx={{ fontSize: "3rem", letterSpacing: "1rem" }} />
                    </Typography>
                </Box>
            </Box>

            <Stack sx={{}}>
                <Box sx={{ height: "90vh", backgroundColor: "lighgray", display: "flex", padding: "0", flexDirection: "" , alignItems:'center' , justifyContent:'space-between'}}>
                    <Box className="sample1" sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Box width={"100%"} sx={{ position: "relative" }}>
                            <Box
                                className="logo_main"
                                fontSize={"2.5rem"}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    position: "relative",
                                    left: "300px",
                                    top: "25%",
                                }}
                            >
                                <FaRegRegistered />
                            </Box>
                            <Typography sx={{ fontSize: "6rem", fontFamily: "Marko one", fontWeight: "bold" }}>
                                fashion.
                            </Typography>
                            <Typography
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
                    <Box className="sample3">
                        <Box className="sample">
                            <Typography className="one" sx={{ transform: "rotate(90deg)", fontWeight: "700", fontSize: "63px", fontFamily:'Mina'}}>
                                001
                            </Typography>
                            <Typography sx={{fontFamily:'Mina', fontSize:'1.0.7rem'}}>
                            light up <br/>your<br/> future
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            <div style={{borderBottom:'1px solid gray', width:'60%', margin:'0 auto'}}></div>
        </Stack>
    );
};

export default Home;
