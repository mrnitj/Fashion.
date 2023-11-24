import '../Styles/View.css'
import { useNavigate } from "react-router-dom";
import { FaRegRegistered } from "react-icons/fa";
import {Stack,Box,Button,Typography, Card, CardMedia,CardContent} from '@mui/material'
import HamburgerBar from "../Components/HamburgerBar";  
import FooterSmall from '../Components/FooterSmall';
import Similar_Products from '../Components/Similar_Products';


const View = () => {

  const navigate = useNavigate()

  return (
    <Stack spacing={5} className='view_mainStack'>
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
                    onClick={() => navigate('/cart')}
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
            
            <Stack className='view_content'
            
                        sx={{padding:'2rem 8rem'}}
                        

            >

                <Card sx={{
                    height:'20rem',
                    display:'flex',
                    background:'transparent',
                    width:'auto',
                    alignSelf:'center',
                    boxShadow:'none'
                }}>

                    <CardMedia
                    // component={'img'}
                    // height={}
                    // image='src\Assets\img7.png'
                    >
                        <img src="src\Assets\img7.png" alt="" style={{height:'100%', width:'200px'}} />

                    </CardMedia>
                    <CardContent className='view_card_content' sx={{fontFamily:'Mina',
                        backgroundColor:'white',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        gap:'1rem',
                        padding:'0 0 0 2rem'
                }}>
                        <Typography sx={{fontFamily:'inherit',
                        fontWeight:'700',
                        fontSize:'2.5rem',
                       
                    }}>
                        Black Pants
                        </Typography >
                        <Typography sx={{fontFamily:'inherit', maxWidth:'30rem'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, unde.
                        </Typography>
                        <Typography className='view_sizes' sx={{display:'flex'}} >

                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                       
                        </Typography>
                        <Box sx={{display:"flex", flexDirection:'row',justifyContent:"space-between",alignItems:'center',
                        width:"80%"
                    }}>

                        <Typography sx={{
                            fontWeight:'700',
                            fontFamily:'inherit',
                            fontSize:'20px'
                        }}>
                            $99.00
                        </Typography>
                        <Button
                            disableRipple
                            
                        sx={{
                            fontFamily:'inherit',
                            color:'black',
                            fontWeight:'700',
                            backgroundColor:'#d9d9d9',
                            borderRadius:'81px',
                            padding:".5rem 1rem" ,
                            '&:hover': {
                                backgroundColor: '#a0a0a0', 
                                color: 'white',
                              },
                            

                        }}>add to cart</Button>

                        </Box>
                    </CardContent>
                        
                </Card>

            </Stack>

            
    <Similar_Products/>
    <FooterSmall/>


    </Stack>
  )
}

export default View