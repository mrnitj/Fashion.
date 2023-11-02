import '../Styles/View.css'
import { useNavigate } from "react-router-dom";
import { FaRegRegistered } from "react-icons/fa";
import {Stack,Box,Button,Typography} from '@mui/material'
import HamburgerBar from "../Components/HamburgerBar";


const View = () => {

  const navigate = useNavigate()

  return (
    <Stack>
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
    </Stack>
  )
}

export default View