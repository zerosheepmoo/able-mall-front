import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { MobAppBarProps } from "../../interfaces/props";

interface Props {
    children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const MobAppBar: React.VFC<MobAppBarProps> = (props) => {
    const { value, handleChange } = props;
    return (
        <>
            <HideOnScroll>
                <AppBar>
                    <Toolbar sx={{ p: 1 }}>
                        {/* <Typography variant="h4" component="div">
                            AbleMall
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} /> */}
                        <Box sx={{ display: "flex", width: "100%" }}>
                            <IconButton
                                sx={{ flex: "1" }}
                                size="large"
                                aria-label="show 2 news"
                                color="inherit"
                            >
                                <Badge badgeContent={2} color="error">
                                    <NotificationsActiveIcon
                                        sx={{ fontSize: "20vw" }}
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton
                                sx={{ flex: "1" }}
                                size="large"
                                aria-label="show 4 updates"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="error">
                                    <AnnouncementIcon
                                        sx={{ fontSize: "20vw" }}
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton
                                sx={{ flex: "1" }}
                                size="large"
                                aria-label="기관조회"
                                color={value === 1 ? "secondary" : "inherit"}
                                onClick={(e) => handleChange(e, 1)}
                            >
                                <SearchIcon sx={{ fontSize: "20vw" }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar sx={{ mb: "20vw" }} />
        </>
    );
};

export default MobAppBar;
