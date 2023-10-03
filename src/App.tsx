import AboutPage from "./Pages/AboutPage";
import FooterPage from "./Pages/FooterPage";
import Home from "./Pages/Home";
import ModelsPage from "./Pages/ModelsPage";
import { Stack, Box } from "@mui/material";

const App = () => {
    return (
        <Stack spacing={6}>
            <Box>
                <Home />
                <ModelsPage />
                <AboutPage />
            </Box>
            <FooterPage />
        </Stack>
    );
};

export default App;
