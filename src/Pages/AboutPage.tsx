import { Stack, Box, Typography } from "@mui/material";
import { FaRegRegistered } from "react-icons/fa";

import './AboutPage.css'

const AboutPage = () => {
    return (
        <Stack alignItems={"center"}>
            <Typography variant="h4" sx={{ fontFamily: "Mina", fontWeight: "700", letterSpacing: ".3rem" }}>
                ABOUT
            </Typography>

            <Box sx={{backgroundColor:'aqu', height:'50vh'}}>
                <Box className="" sx={{ display: "flex", justifyContent: "center    ", flexDirection: "row", alignItems:'center',backgroundColor:'re',
            height:'100%' }}>
                    <Box className='logo_box' width={"50%"} sx={{ position: "relative" ,zIndex:'1', backgroundColor:'lightblu' ,height:'100%',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>

                        <Typography sx={{ fontSize: "4.5rem", fontFamily: "Marko one", fontWeight: "bold",  }}>
                        <Box
                            className="logo"
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
                    
                    <Box sx={{width:'50%', height:'inherit', backgroundColor:'lightgoldenrodyello', display:'flex',
                alignItems:'end',paddingBottom:'3rem'}}>
                        <Typography sx={{fontSize:'25px', width:'80%', fontFamily:'Mina', fontWeight:'700'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo inventore officia. Totam
                            voluptate, sunt fugiat tempore laborum beatae natus.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        <div style={{borderBottom:'1px solid gray', width:'60%', margin:'0 auto'}}/>

        </Stack>
    );
};

export default AboutPage;
