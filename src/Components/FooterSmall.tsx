import { Stack, Box, Typography, IconButton } from "@mui/material";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
const FooterSmall = () => {
    return (
        <Stack direction={"row"} style={{ alignItems: "center", alignSelf:"center",gap:'4rem', borderTop:'1px solid grey' }}>
            <Typography style={{ fontFamily: "Marko One", fontSize: "31px", fontWeight: "700", margin: "0", gap:"10rem" }}>
                fashion.
            </Typography>
            <Stack direction={"row"} style={{gap:"2em"}}>
                <Typography style={{fontFamily:"Marko One", fontWeight:'700', fontSize:"18px"}}>Lorem ipsum </Typography>
                <Typography style={{fontFamily:"Marko One", fontWeight:'700', fontSize:"18px"}}>Lorem ipsum </Typography>
                <Typography style={{fontFamily:"Marko One", fontWeight:'700', fontSize:"18px"}}>Lorem ipsum </Typography>
            </Stack>
            <Stack direction={'row'}>
                <IconButton sx={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit" }}>
                    <CiMail className="footerIcon" style={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit" }}>
                    <CiFacebook className="footerIcon" style={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton sx={{ fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit" }}>
                    <CiInstagram className="footerIcon" style={{ fontSize: "30px" }} />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default FooterSmall;
