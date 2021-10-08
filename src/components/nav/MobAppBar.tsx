import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { MobAppBarProps } from "../../interfaces/props";
import { Link } from "react-router-dom";

interface Props {
    children: React.ReactElement;
}

//  hide on scrol
const HideOnScroll = (props: Props) => {
    const { children } = props;
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
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <IconButton
                                sx={{ flex: "1" }}
                                size="large"
                                aria-label="show 2 news"
                                color="inherit"
                            >
                                <Badge badgeContent={2} color="error">
                                    <NotificationsActiveIcon
                                        sx={{ fontSize: 72 }}
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
                                    <AnnouncementIcon sx={{ fontSize: 72 }} />
                                </Badge>
                            </IconButton>
                            <IconButton
                                sx={{ flex: "1" }}
                                size="large"
                                aria-label="기관조회"
                                color={value === 1 ? "secondary" : "inherit"}
                                onClick={(e) => handleChange(e, 1)}
                            >
                                <SearchIcon sx={{ fontSize: 72 }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar sx={{ mb: 10 }} />
        </>
    );
};

export default MobAppBar;
