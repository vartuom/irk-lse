import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { store } from "./store/store";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        phones: true; // adds the `mobile` breakpoint
        tablets: true;
        desktopSmall: true;
        desktop: true;
    }
}

const theme = createTheme({
    typography: {
        fontFamily: ["GolosTextWebRegular", "Arial", "sans-serif"].join(","),
    },
    breakpoints: {
        values: {
            phones: 480,
            tablets: 768,
            desktopSmall: 1280,
            desktop: 1920,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
