import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ComplexNav from "./nav/ComplexNav";
import useWindowWidthSize from "../hooks/useWindowWidthSize";
import { Switch, Route, useHistory } from "react-router-dom";
import MainBody from "./bodies/MainBody";
import OrganSearchBody from "./bodies/OrganSearchBody";
import ServiceBody from "./bodies/ServiceBody";
import ProductBody from "./bodies/ProductBody";
import PolicySearchBody from "./bodies/PolicySearchBody";
import AuthBody from "./bodies/AuthBody";
import FOFBody from "./bodies/FOFBody";

const locas = ["", "orgsrh", "addser", "shop", "polsrh"];

const MainPage: React.VFC = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIdx(newValue);
        handleNavClick(newValue);
    };
    const winWidth = useWindowWidthSize();

    const history = useHistory();

    const handleNavClick = (idx: number) => {
        history.push(`/${locas[idx]}`);
    };

    return (
        <>
            {/* navigation */}
            <ComplexNav
                winWidth={winWidth}
                value={tabIdx}
                handleChange={handleTabChange}
            />
            {/* mainbody */}
            <Grid container spacing={2}>
                <Switch>
                    <Route path="/" exact>
                        <MainBody />
                    </Route>
                    <Route path="/orgsrh">
                        <OrganSearchBody />
                    </Route>
                    <Route path="/addser">
                        <ServiceBody />
                    </Route>
                    <Route path="/shop">
                        <ProductBody />
                    </Route>
                    <Route path="/polsrh">
                        <PolicySearchBody />
                    </Route>
                    <Route path="/auth">
                        <AuthBody />
                    </Route>
                    <Route>
                        <FOFBody />
                    </Route>
                </Switch>
            </Grid>
        </>
    );
};

export default MainPage;
