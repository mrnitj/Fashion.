import "../Styles/Shop.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Stack, Box, Typography, Button, Card, CardContent, CardMedia,CardActions, IconButton } from "@mui/material";

const Shop = () => {
    return (
        <Stack className="ShopMainStack">
            <Box className="ShopMainBox">
                <Card sx={{ backgroundColor:'transparent',maxWidth: '13rem',height:'auto' ,boxShadow:'none',display:'flex',flexDirection:'column' ,gap:'1rem'}}>
                     <CardMedia
                        className="cardmedia"
                        sx={{ height:200 ,borderRadius:'8px 8px 0 0 '}}
                        image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                        title="green iguana"
                        
                    />
                    <CardContent sx={{padding:'0 !important', backgroundColor:'#DFDADA', margin:'0',borderRadius:' 0 0 8px 8px'}}>
                        <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0'}}>
                        <Typography className="ShopCardP" gutterBottom variant="h5" component="div" sx={{fontSize:'1.1rem',margin:'0',padding:'0',fontFamily:"Mina",fontWeight:'700'}}>
                            Black Pants
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{padding:'0'}}>
                            <ul>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>

                            </ul>
                        </Typography>

                        </Box>
                        <Box sx={{padding:'0', display:'flex', alignItems:'center',justifyContent:'space-between'}} >
                            <Typography sx={{padding:'0', fontFamily:'Mina', fontSize:'.8rem'}}>$99.00</Typography>
                            <IconButton size="medium" ><FavoriteBorderIcon style={{}}/></IconButton>
                        </Box>
                    </CardContent>
                   
                </Card>
            </Box>
        </Stack>
    );
};

export default Shop;
