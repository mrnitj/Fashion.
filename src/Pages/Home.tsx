import "./Home.css";

import { Stack, Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Home = () => {
    return (
        <Stack direction={"column"}>
            <Box
                sx={{
                    backgroundColor: "lighBlue",
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

            <Stack>
                <Box sx={{ height: "90vh", backgroundColor: "lightgray", display: "flex", padding: "0" }}>
                    <Box className="sample1" sx={{ display: "flex", justifyContent: "center", flexDirection:'column' }}>
                        <Box width={'100%'}>

                        <Typography sx={{ fontSize: "6rem", fontFamily: "Marko one" }}>fashion.</Typography>
                        <Typography
                            width={"100%"}
                            textAlign={"left"}
                            fontFamily={"inter"}
                            letterSpacing={"0.4rem"}
                            fontSize={'0.7rem'}
                        >
                            CRAFTED COLLECTION
                        </Typography>
                        </Box>
                    </Box>

                    <Box className="sample2"></Box>
                    <Box className="sample3"></Box>
                    {/* <Stack className=''></Stack> */}
                </Box>
            </Stack>
        </Stack>
    );
};

export default Home;
