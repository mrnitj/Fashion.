import { Box, styled, Typography } from "@mui/material";
const MainContainer = styled(Box)(({ theme }) => ({}));
const Logo = styled(Box)(({ theme }) => ({}));
const Typo = styled(Box)(({ theme }) => ({
    fontSize: "6rem",
    fontFamily: "Marko One",
    fontWeight: "bold",
    position: "relative",
    display:'inline-block',
    "&::after": {
        content: '"\\00AE"',
        position: "absolute",
        top: "0.2em",
        right: "0em", 
        fontSize: '0.45em', 
    },
}));

const SubTitle = styled(Typography)(({theme})=>({
    fontSize:'0.17em',
    fontWeight:500,
    fontFamily:'inter',
    letterSpacing:'0.35em',
    textAlign:'left'
}))

const FashionLogo = () => {
    return (
        <MainContainer>
            <Logo>
                <Typo>Fashion.


                <SubTitle variant="subtitle1">CRAFTED COLLECTION</SubTitle>
                </Typo>
            </Logo>
        </MainContainer>
    );
};

export default FashionLogo;
