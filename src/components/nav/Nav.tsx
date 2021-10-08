import React from "react";
import { NavProps } from "../../interfaces/props";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PolicyIcon from "@mui/icons-material/Policy";
import Button from "@mui/material/Button";

const Nav: React.VFC<NavProps> = (props) => {
    const { value, handleChange } = props;
    return (
        <>
            <AppBar
                sx={{
                    backgroundColor: "#ffffff",
                    position: "fixed",
                }}
            >
                <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        variant="fullWidth"
                        sx={{ flex: 3 }}
                        TabIndicatorProps={{
                            style: { display: value === 0 ? "none" : "" },
                        }}
                    >
                        <Tab sx={{ position: "absolute" }} />

                        <Tab
                            label="기관검색"
                            icon={<SearchIcon sx={{ fontSize: 90, p: 1 }} />}
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
                                <ShoppingCartIcon sx={{ fontSize: 90, p: 1 }} />
                            }
                        />
                        <Tab
                            label="정책검색"
                            icon={<PolicyIcon sx={{ fontSize: 90, p: 1 }} />}
                        />
                    </Tabs>
                    <Box
                        sx={{
                            flex: "1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            sx={{ p: 2 }}
                            onClick={(e) => handleChange(e, 0)}
                        >
                            <Typography
                                variant="h3"
                                sx={{ width: "100%", textAlign: "center" }}
                            >
                                ablemall
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar sx={{ pb: 19 }} />
        </>
    );
};

export default Nav;
