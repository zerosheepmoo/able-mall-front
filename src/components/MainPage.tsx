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
import SignInBody from "./bodies/SignInBody";

const locas = ["", "orgsrh", "addser", "shop", "polsrh", "signin"];

const exampleInfo = {
    name: "김공자",
    email: "able@ablemall.com",
    points: 49000,
    type: "뇌병변장애인",
    level: "3급",
};

const MainPage: React.VFC = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
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

    const goSignUp = () => {
        history.push(`/auth`);
    };

    const goSignIn = () => {
        history.push("/signin");
    };

    const goHome = (event: React.SyntheticEvent) => {
        handleTabChange(event, 0);
    };

    return (
        <>
            {/* navigation */}
            <ComplexNav
                winWidth={winWidth}
                value={tabIdx}
                handleChange={handleTabChange}
                signedIn={isSignedIn}
                goSignIn={goSignIn}
            />
            {/* mainbody */}
            <Grid container sx={{ mb: 10 }}>
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
                        <ProductBody info={exampleInfo} winWidth={winWidth} />
                    </Route>
                    <Route path="/polsrh">
                        <PolicySearchBody />
                    </Route>
                    <Route path="/auth">
                        <AuthBody winWidth={winWidth} />
                    </Route>
                    <Route>
                        <SignInBody
                            goSignUp={goSignUp}
                            isSignedIn={isSignedIn}
                            setIsSignedIn={setIsSignedIn}
                            gohome={goHome}
                            info={exampleInfo}
                        />
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
