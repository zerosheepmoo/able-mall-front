import React from "react";
import { NavProps } from "../../interfaces/props";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PolicyIcon from "@mui/icons-material/Policy";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";

const Nav: React.VFC<NavProps> = (props) => {
    const { value, handleChange, signedIn, winWidth } = props;
    return (
        <>
            <AppBar
                sx={{
                    backgroundColor: "#ffffff",
                    position: "sticky",
                    mb: 2,
                }}
            >
                <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Grid container alignItems="center">
                        <Grid container item md={12} lg={8}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="inherit"
                                variant="fullWidth"
                                sx={{ flex: 1 }}
                                TabIndicatorProps={{
                                    style: {
                                        display: value === 0 ? "none" : "",
                                    },
                                }}
                            >
                                <Tab sx={{ position: "absolute" }} />

                                <Tab
                                    label="기관검색"
                                    icon={
                                        <SearchIcon
                                            sx={{ fontSize: 90, p: 1 }}
                                        />
                                    }
                                />
                                <Tab
                                    label="서비스신청"
                                    icon={
                                        <AddCircleOutlineIcon
                                            sx={{ fontSize: 90, p: 1 }}
                                        />
                                    }
                                />
                                <Tab
                                    label="상품구매"
                                    icon={
                                        <ShoppingCartIcon
                                            sx={{ fontSize: 90, p: 1 }}
                                        />
                                    }
                                />
                                <Tab
                                    label="정책검색"
                                    icon={
                                        <PolicyIcon
                                            sx={{ fontSize: 90, p: 1 }}
                                        />
                                    }
                                />
                                <Tab
                                    label={signedIn ? "내정보" : "로그인"}
                                    icon={
                                        signedIn ? (
                                            <InfoIcon
                                                sx={{ fontSize: 90, p: 1 }}
                                            />
                                        ) : (
                                            <VpnKeyIcon
                                                sx={{ fontSize: 90, p: 1 }}
                                            />
                                        )
                                    }
                                />
                            </Tabs>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            lg={4}
                            order={winWidth < 1200 ? -1 : 0}
                        >
                            <Box
                                sx={{
                                    flex: "1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    sx={{ pl: 2, pr: 2, pt: 3 }}
                                    onClick={(e) => handleChange(e, 0)}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            width: "100%",
                                            textAlign: "center",
                                        }}
                                    >
                                        ablemall
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Nav;
