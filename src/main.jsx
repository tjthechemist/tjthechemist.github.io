import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AppRouter } from "./router";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./styles/style.css";

createRoot(document.getElementById("root")).render(
    <div>
        <StrictMode>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <AppRouter />
            </ThemeProvider>
        </StrictMode>
    </div>
);