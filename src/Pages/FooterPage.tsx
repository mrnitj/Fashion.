import { Stack, Box, Typography, IconButton } from "@mui/material";
import { CiMail } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiFacebook } from 'react-icons/ci';

const FooterPage = () => {
    return (
        <Stack sx={{ backgroundColor: "#D9D9D9", height: "40vh", borderRadius: "20px", padding: "0 2rem 0", }}>
            <Box sx={{ backgroundColor: "lightblu", height: "100%", display: "flex", justifyContent:'space-around',color:'black', }}>
                <Box sx={{ backgroundColor: "aqu", height: "100%", width: "5rem", display: "flex" }}>
                    <Typography
                        sx={{
                            fontFamily: "Marko One",
                            fontSize: "1.2rem",
                            height: "100%",
                            width: "20%",
                            fontWeight: "700",
                            display: "flex",
                            alignItems: "center",
                            color:"inherit"
                        }}
                    >
                        f a s h i o n .
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "re" ,fontSize:'1rem', fontFamily:"Mina", fontWeight:"400", display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>+xx xxxx xxxxx</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum dolor</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum dolor</Typography>
                </Box>
                <Box sx={{ backgroundColor: "blu",fontSize:'1rem', fontFamily:"Mina", fontWeight:"400", display:'flex', flexDirection:'column', justifyContent:'center' }}>

                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum dolor</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum dolor</Typography>

                </Box>
                <Box sx={{ backgroundColor: "blu",fontSize:'1rem', fontFamily:"Mina", fontWeight:"400", display:'flex', flexDirection:'column', justifyContent:'center' }}>

                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum dolor</Typography>
                    <Typography sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}>Lorem ipsum dolor</Typography>

                </Box>
                <Box sx={{ backgroundColor: "viole",fontSize:'1rem', fontFamily:"Mina", fontWeight:"400", display:'flex', flexDirection:'column', justifyContent:'center' }}>
                        <IconButton sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}><CiMail style={{fontSize:"50px"}}/></IconButton>
                        <IconButton sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}><CiFacebook style={{fontSize:"50px"}}/></IconButton>
                        <IconButton sx={{fontSize:"inherit", fontFamily:"inherit", fontWeight:'inherit'}}><CiInstagram style={{fontSize:"50px"}}/></IconButton>
                </Box>
            </Box>
        </Stack>
    );
};

export default FooterPage;
