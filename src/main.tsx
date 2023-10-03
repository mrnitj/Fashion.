import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
);
