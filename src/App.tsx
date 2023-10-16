import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { Stack } from "@mui/material";
import SignUpPage from "./Pages/SignUpPage";

import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";

const App = () => {
    return (
        <>
            <Stack sx={{ backgroundColor: "lightpin" }} spacing={6}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </Stack>
        </>
    );
};

export default App;
