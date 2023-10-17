import "../Styles/SignUpPage.css";
import { Stack, Box, TextField, FormLabel, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaRegRegistered } from "react-icons/fa";

const SignUpPage = () => {
    const navigate = useNavigate();

    return (
        <Stack
            className="SigninMainStack"
            sx={{ height: "100vh", display: "flex", flexDirection: "row", backgroundColor: "r" }}
        >
            <Box>
                <Typography
                    onClick={() => navigate("/")}
                    sx={{
                        fontFamily: "Marko one",
                        fontSize: "3rem",
                        position: "relative",
                        fontWeight: "700",
                        cursor: "pointer",
                    }}
                >
                    fashion.
                    <FaRegRegistered style={{ position: "absolute", top: "9", right: "-5", fontSize: "25px" }} />
                </Typography>
            </Box>
            <Box
                className="SigninImgBox"
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
                <img src="src/Assets/signup.png" alt="" style={{}} />
            </Box>
            <Stack
                className="SigninSecondStack"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    justifyContent: "center",
                    padding: "0 0rem 0",
                    fontFamily: "Mina",
                }}
            >
                <Stack
                    className="SigninInputStack"
                    spacing={2}
                    sx={{
                        backgroundColor: "lightblu",
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        height: "50%",
                    }}
                >
                    <FormLabel className="SigninLabels" sx={{ fontFamily: "Mina" }}>
                        Email
                    </FormLabel>
                    <TextField
                        className="SigninTextfield"
                        variant="standard"
                        placeholder="name"
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
                    <FormLabel className="SigninLabels" sx={{ fontFamily: "Mina" }}>
                        Email
                    </FormLabel>
                    <TextField
                        className="SigninTextfield"
                        type="email"
                        variant="standard"
                        placeholder="email"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        inputProps={{ style: { border: "none", outline: "none" } }}
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
                    <FormLabel className="SigninLabels" sx={{ fontFamily: "Mina" }}>
                        Password
                    </FormLabel>
                    <TextField
                        className="SigninTextfield"
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
                        SignUp
                    </Button>
                    <Typography sx={{ letterSpacing: "2px", fontFamily: "Mina" }}>
                        don’t have an account{" "}
                        <span
                            style={{ color: "blue", fontWeight: "700", cursor: "pointer" }}
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </Typography>
                </Stack>
            </Stack>

            <Box className="SigninImgBox2" sx={{}}></Box>
        </Stack>
    );
};

export default SignUpPage;
