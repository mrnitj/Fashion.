import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


import Sample from "./Pages/Sample";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import MenShop from "./Pages/Shop/MenShop";
import WomenShop from "./Pages/Shop/WomenShop";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/shop/men" element={<MenShop />} />
                <Route path="/shop/women" element={<WomenShop />} />
            </Routes>
        </>
    );
};

export default App;
