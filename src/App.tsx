import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { Stack } from "@mui/material";
import SignUpPage from "./Pages/SignUpPage";

import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import View from "./Pages/View";

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
                </Routes>
            </Stack>
        </>
    );
};

export default App;
