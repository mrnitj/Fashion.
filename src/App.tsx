import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
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
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>

        </Stack>
    </>
    );
};

export default App;
