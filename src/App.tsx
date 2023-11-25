import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { Stack } from "@mui/material";
import SignUpPage from "./Pages/SignUpPage";

import Shop from "./Pages/Shop";
import View from "./Pages/View";
import Cart from "./Pages/Cart";
import { DealerHome } from "./Dealer/DealerPages/DealerHome";
import { DealerLogin } from "./Dealer/DealerPages/DealerLogin";

const App = () => {
    return (
        <>
            <Stack sx={{ backgroundColor: "lightpin" }} spacing={6}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/dealerlogin" element={<DealerLogin/>}/>
                    <Route path="/dealer" element={<DealerHome/>} />
                </Routes>
            </Stack>
        </>
    );
};

export default App;
