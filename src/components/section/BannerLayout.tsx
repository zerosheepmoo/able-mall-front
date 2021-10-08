import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { BannerLayoutProps } from "../../interfaces/props";

const BannerLayout: React.VFC<BannerLayoutProps> = (props) => {
    const { imgsrc, alt, bText } = props;
    return (
        <div>
            <Paper
                elevation={2}
                sx={{
                    m: 2,
                    height: 130,
                    textAlign: "center",
                    backgroundImage: `url(${imgsrc}`,
                }}
            >
                <Typography color="secondary">{bText}</Typography>
            </Paper>
        </div>
    );
};

export default BannerLayout;
