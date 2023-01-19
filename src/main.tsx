import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/app/app';

const theme = createTheme({
    typography: {
        fontFamily: ['GolosTextWebRegular', 'Arial', 'sans-serif'].join(','),
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
