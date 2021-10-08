import React from "react";
import MainPage from "./components/MainPage";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./styles/theme";
import { HashRouter } from "react-router-dom";

const App: React.VFC = () => {
    return (
        <HashRouter basename="/able-mall-front/">
            <ThemeProvider theme={mainTheme}>
                <div className="App">
                    <CssBaseline />
                    <MainPage></MainPage>
                </div>
            </ThemeProvider>
        </HashRouter>
    );
};

export default App;
