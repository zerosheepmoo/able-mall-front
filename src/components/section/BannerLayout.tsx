import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { BannerLayoutProps } from "../../interfaces/props";

const BannerLayout: React.VFC<BannerLayoutProps> = (props) => {
    const { imgsrc, alt, bText } = props;
    return (
        <Paper
            elevation={2}
            sx={{
                mt: 2,
                ml: 2,
                mr: 2,
                height: 130,
                textAlign: "center",
                backgroundColor: "#44aaff",
            }}
        >
            <Typography color="secondary">{bText}</Typography>
            <Typography color="secondary">{alt}</Typography>
        </Paper>
    );
};

export default BannerLayout;
