import React from "react";
import MainPage from "./components/MainPage";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./styles/theme";

const App: React.VFC = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <div className="App">
                <CssBaseline />
                <MainPage></MainPage>
            </div>
        </ThemeProvider>
    );
};

export default App;
