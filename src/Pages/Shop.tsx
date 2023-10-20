import "../Styles/Shop.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
    Stack,
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    IconButton,
    Checkbox,
    FormGroup,
    FormControlLabel,
} from "@mui/material";
import Footer from "./Footer";

import FavoriteIcon from "@mui/icons-material/Favorite";

const Shop = () => {
    return (
        <Stack className="ShopMainStack" sx={{height:'200vh'}} spacing={6} >
            <Typography variant="h3" component={"div"} sx={{ fontFamily: "Mina", fontWeight: "700" }}>
                Shop Here....
            </Typography>
            <Stack className="sidebarStack" direction={"row"} spacing={6} sx={{height:'100%', padding:'0 5rem'}}>
                <Box className="sidebarBox" sx={{ height:"100%",backgroundColor:'red'}}>
                <Box className='checkboxes' sx={{backgroundColor: "aqua",display:"flex",
            flexDirection:"column", gap:'3em', height:'auto', width:'auto',position:'sticky', top:'0'}}>
                    <Box sx={{ backgroundColor: "green", height: "auto" }}>
                        <Typography sx={{ fontFamily: "Mina" }}>FILTER</Typography>

                        <Box sx={{height:"auto", display:'flex',width:'200px' ,flexDirection:'column', padding:'1rem 0 0 2rem '}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "black",
                                            },
                                        }}
                                    />
                                }
                                label="Black"
                                sx={{
                                    // height:'22px',
                                    
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"

                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "blue",
                                            },
                                        }}
                                    />
                                }
                                label="Blue"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="Grey"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "green",
                                            },
                                        }}
                                    />
                                }
                                label="Green"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            
                           
                        </Box>
                    </Box>
                    <Box className='reating' sx={{ backgroundColor: "violet", height: "auto", width:'100%' }}>
                        <Typography sx={{ fontFamily: "Mina" }}>RATING</Typography>

                        <Box sx={{height:"auto", display:'flex', flexDirection:'column', width:'100% !important', padding:'1rem 0 0 2rem '}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="4★ & above"
                                sx={{
                                    // height:'22px',
                                    
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"

                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="3★ & above"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="2★ & above"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="1★ & above"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            
                           
                        </Box>
                    </Box>
                    <Box className='reating' sx={{ backgroundColor: "violet", height: "auto", width:'100%' }}>
                        <Typography sx={{ fontFamily: "Mina" }}>OFFERS</Typography>

                        <Box sx={{height:"auto", display:'flex', flexDirection:'column', width:'100% !important', padding:'1rem 0 0 2rem '}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="30% or more"
                                sx={{
                                    // height:'22px',
                                    
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"

                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="40% or more"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="50% or more"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            padding:'0',
                                            
                                            color: "grey",
                                            "&.Mui-checked": {
                                                color: "grey",
                                            },
                                        }}
                                    />
                                }
                                label="60% or more"
                                sx={{
                                    // height:'22px',
                                    "& .MuiTypography-root": {
                                        fontFamily: "Mina",
                                        fontSize:"14px"
                                        
                                    },
                                }}
                            />
                            
                           
                        </Box>
                    </Box>

                    </Box>
                </Box>

                <Box className="ShopMainBox" sx={{ display: "flex", flexWrap: "wrap", gap: "2rem 1rem" }}>
                    {/* -------------------- */}
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    {/* -------------------- */}

                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "15rem",
                            height: "362px",
                            boxShadow: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <CardMedia
                            className="ShopCardmedia"
                            sx={{ height: 250, width: "auto", borderRadius: "8px 8px 0 0 " }}
                            image="https://sslimages.shoppersstop.com/sys-master/images/ha3/h58/17477514166302/A21342WPANTS118_BLACK_alt1.jpg_2000Wx3000H"
                            title="green iguana"
                        />
                        <CardContent
                            sx={{
                                padding: "0 !important",
                                backgroundColor: "#DFDADA",
                                margin: "0",
                                borderRadius: " 0 0 8px 8px",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0",
                                }}
                            >
                                <Typography
                                    className="ShopCardP"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: "1.4rem",
                                        margin: "0",
                                        padding: "0",
                                        fontFamily: "Mina",
                                        fontWeight: "700",
                                    }}
                                >
                                    Black Pants
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ padding: "0" }}>
                                    <ul>
                                        <li>s</li>
                                        <li>m</li>
                                        <li>l</li>
                                        <li>xl</li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography sx={{ padding: "0", fontFamily: "Mina", fontSize: ".9rem" }}>$99.00</Typography>
                                <Checkbox
                                    icon={<FavoriteBorderIcon sx={{ fontSize: "2rem" }} />} // Unchecked icon
                                    checkedIcon={<FavoriteIcon sx={{ fontSize: "2rem", color: "grey" }} />} // Checked icon
                                />
                            </Box>
                        </CardContent>
                    </Card>
          

                    
                  
                </Box>
            </Stack>

            {/* <Footer /> */}
        </Stack>
    );
};

export default Shop;
