import React from "react";
import ReactPlayer from "react-player";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const MainVideo: React.VFC = () => {
    return (
        <Paper
            sx={{
                ml: 2,
                mr: 3,
                mb: 4,
                height: 300,
                display: "flex",
                flexDirection: "column",
                p: 3,
                backgroundColor: "#222222",
                color: "#fafafa",
            }}
        >
            <Typography variant="h5" role="h4">
                흥미로운 이야기
            </Typography>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=WVJMSwrx6D8"
                muted
                playing
                width="auto"
            />
        </Paper>
    );
};

export default MainVideo;
