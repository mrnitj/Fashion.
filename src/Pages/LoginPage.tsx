import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

import { Stack, Box, TextField, Typography, Button, FormLabel } from "@mui/material";

const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <Stack  className="LoginMainStack" sx={{ height: "100vh", display: "flex", flexDirection: "row" }}>
            <Stack
                className="LoginSecondStack"
                // spacing={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    justifyContent: "center",
                    padding: "0 0 0 6rem",
                    fontFamily: "Mina",
                    backgroundColor: "aqu",
                }}
            >
                <Stack
                    className="LoginInputStack"
                    spacing={2}
                    sx={{
                        backgroundColor: "lightblu",
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        height: "50%",
                    }}
                >
                    <FormLabel className="LoginLabels" sx={{ fontFamily: "Mina" }}>
                        Email
                    </FormLabel>
                    <TextField
                        className="LoginTextfield"
                        type="email"
                        variant="standard"
                        placeholder="email"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            backgroundColor: "white",
                            height: "2.5rem",
                            borderRadius: "50px",
                            display: "felx",
                            justifyContent: "center",
                            padding: "0 1rem 0",
                            fontFamily: "Mina",
                        }}
                    ></TextField>
                    <FormLabel className="LoginLabels" sx={{ fontFamily: "Mina" }}>
                        Password
                    </FormLabel>
                    <TextField
                        className="LoginTextfield"
                        type="password"
                        size={"small"}
                        variant="standard"
                        placeholder="password"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            backgroundColor: "white",
                            height: "2.5rem",
                            borderRadius: "50px",
                            display: "felx",
                            justifyContent: "center",
                            padding: "0 1rem 0",
                            fontFamily: "Mina",
                        }}
                    ></TextField>
                    <Button
                        size={"medium"}
                        sx={{
                            alignSelf: "flex-start",
                            padding: "1rem",
                            borderRadius: "50px",
                            backgroundColor: "#D9D9D9",
                            color: "black",
                            fontFamily: "Mina",
                        }}
                    >
                        Login
                    </Button>
                    <Typography sx={{ letterSpacing: "2px", fontFamily: "Mina" }}>
                        don’t have an account{" "}
                        <span style={{ color: "blue", fontWeight: "700", cursor: "pointer" }} onClick={()=> navigate('/signup')}>Sign up</span>
                    </Typography>
                </Stack>
            </Stack>

            <Box
                className="LoginImgBox"
                sx={{
                    height: "100%",
                    width: "100%",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    flex: "1",
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <img src="src/Assets/Login.png" alt="" style={{}} />
            </Box>
        </Stack>
    );
};

export default LoginPage;
