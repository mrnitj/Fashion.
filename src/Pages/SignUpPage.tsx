import { useRef } from "react";
import "../Styles/SignUpPage.css";
import { Stack, Box, TextField, FormLabel, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaRegRegistered } from "react-icons/fa";
import axios from "axios";

interface UserData {
    username: string;
    password: string;
    email: string;
    accessKey: string;
}

const SignUpPage = () => {
    // const username": "motu1",
    // "password": "motu",
    // "email": "motu1@mail.com",

    const usernameRef: React.RefObject<HTMLInputElement> = useRef(null);
    const emailRef: React.RefObject<HTMLInputElement> = useRef(null);
    const passwordRef: React.RefObject<HTMLInputElement> = useRef(null);

    const handleRegister = async () => {
        try {
            const usernameValue = usernameRef.current?.value;
            const emailValue = emailRef.current?.value;
            const passwordValue = passwordRef.current?.value;
            const accessKey = "67e987e13f0bbbc3dcd0";

            if (usernameValue && emailValue && passwordValue) {
                const userData: UserData = {
                    username: usernameValue,
                    email: emailValue,
                    password: passwordValue,
                    accessKey: accessKey,
                };

                const response = await axios.post("https://ecommerce-api.bridgeon.in/users/register", userData);
                console.log(response);

                if (response.status === 201) {
                    alert("user registered successfully");
                    localStorage.setItem("userToken", response.data.data.token);
                }
                if (response.status === 400) {
                    return alert("User Already Exists");
                }

                // Now you can use userData to send the registration data to your server or perform other actions.
                console.log("User Data:", userData);
            } else {
                console.error("Please fill in all the fields");
            }
        } catch (error) {
            alert("User Already Exists=");
        }
    };

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
                        Username
                    </FormLabel>
                    <TextField
                        inputRef={usernameRef}
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
                        inputRef={emailRef}
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
                        inputRef={passwordRef}
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
                        onClick={handleRegister}
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
