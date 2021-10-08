import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ComplexNav from "./nav/ComplexNav";
import useWindowWidthSize from "../hooks/useWindowWidthSize";

const loca = ["", "orgsrh", "addser", "shop", "polsrh"];

const MainPage: React.VFC = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIdx(newValue);
    };
    const winWidth = useWindowWidthSize();

    useEffect(() => {
        window.location.href = `${window.location.origin}${window.location.pathname}#${loca[tabIdx]}`;
    }, [tabIdx]);

    return (
        <div style={{ marginBottom: 70 }}>
            <Grid container spacing={2}>
                {/* navigation */}
                <Grid item sx={{ width: "100%" }}>
                    <ComplexNav
                        winWidth={winWidth}
                        value={tabIdx}
                        handleChange={handleTabChange}
                    />
                </Grid>
                <Grid container item sm={9}>
                    {/* boddy */}
                    <Grid container item>
                        <Grid container item xs={12} md={6} lg={4}>
                            1.1
                        </Grid>
                        <Grid container item xs={12} md={6} lg={4}>
                            1.2
                        </Grid>
                        <Grid container item xs={12} md={12} lg={4}>
                            1.3
                        </Grid>
                    </Grid>
                    {/* bottom */}
                    <Grid container item>
                        2
                    </Grid>
                    {/* bottom2 */}
                    <Grid item>
                        <Box
                            sx={{ height: 1000, backgroundColor: "#000000" }}
                        ></Box>
                    </Grid>
                </Grid>
                <Grid container item sm={3} sx={{ backgroundColor: "#afafaf" }}>
                    Login 화면
                </Grid>
            </Grid>
        </div>
    );
};

export default MainPage;
