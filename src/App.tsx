import AboutPage from "./Pages/AboutPage";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ModelsPage from "./Pages/ModelsPage";
import { Stack, } from "@mui/material";
import SignUpPage from "./Pages/SignUpPage";

import {Routes, Route} from 'react-router-dom'

const App = () => {
    return (
    <>

        <Stack spacing={6}>
                
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/singup' element={<LoginPage/>}/>
            </Routes>

        </Stack>
    </>
    );
};

export default App;
