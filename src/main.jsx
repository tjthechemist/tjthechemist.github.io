import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./router.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </StrictMode>
);
