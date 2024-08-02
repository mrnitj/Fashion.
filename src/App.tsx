import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";


import Shop from "./Pages/Shop";
import View from "./Pages/View";
import Cart from "./Pages/Cart";
import { DealerHome } from "./Dealer/DealerPages/DealerHome";
import { DealerLogin } from "./Dealer/DealerPages/DealerLogin";
import { EditProduct } from "./Dealer/DealerPages/EditProduct";
import Sample from "./Pages/Sample";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/view/:id" element={<View />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/dealerlogin" element={<DealerLogin/>}/>
                    <Route path="/dealer" element={<DealerHome/>} />
                    <Route path="/updateproduct/:id" element={<EditProduct/>} />
                    <Route path="/sample" element={<Sample/>} />
                </Routes>
        </>
    );
};

export default App;
