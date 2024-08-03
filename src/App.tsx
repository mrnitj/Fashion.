import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


import Sample from "./Pages/Sample";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/sample" element={<Sample />} />
            </Routes>
        </>
    );
};

export default App;
