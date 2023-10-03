import AboutPage from "./Pages/AboutPage";
import FooterPage from "./Pages/FooterPage";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ModelsPage from "./Pages/ModelsPage";
import { Stack, Box } from "@mui/material";

const App = () => {
    return (
        <Stack spacing={6}>
                <Home />
                <ModelsPage />
                <AboutPage />
            <FooterPage />
            <LoginPage/>
        </Stack>
    );
};

export default App;
