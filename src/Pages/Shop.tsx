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
        <Stack className="ShopMainStack" spacing={6}>
            <Typography variant="h3" component={"div"} sx={{ fontFamily: "Mina", fontWeight: "700" }}>
                Shop Here....
            </Typography>
            <Stack className="sidebarStack" direction={"row"} spacing={6}>
                <Box className="sidebarBox" sx={{ height: "100", backgroundColor: "aqu", width: "700px" }}>
                    <Box sx={{ backgroundColor: "gre", height: "auto" }}>
                        <Typography sx={{ fontFamily: "Mina" }}>FILTER</Typography>

                        <Box sx={{height:"auto", display:'flex', flexDirection:'column', padding:'.8rem 2rem'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            
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
                                        
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            
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
                                        
                                    },
                                }}
                            />
                            
                           
                        </Box>
                    </Box>
                </Box>

                <Box className="ShopMainBox" sx={{ display: "flex", flexWrap: "wrap", gap: "2rem 1rem" }}>
                    {/* -------------------- */}
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            width: "14rem",
                            height: "auto",
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
                                <IconButton>
                                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>

            <Footer />
        </Stack>
    );
};

export default Shop;
