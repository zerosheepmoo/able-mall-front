import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { ProductToolProps } from "../../interfaces/props";

const ProductTool: React.VFC<ProductToolProps> = (props) => {
    const [isHidden, setHidden] = useState(false);
    const [calcedWidth, setCalcedWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const { info, winWidth } = props;

    const hide = () => {
        setHidden(true);
    };
    const show = () => {
        setHidden(false);
    };

    useEffect(() => {
        setCalcedWidth(ref.current?.clientWidth ?? 0);
    }, []);

    return (
        <Paper
            elevation={6}
            color="primary"
            ref={ref}
            sx={{
                height: isHidden ? 120 : 280,
                width: "92vw",
                textAlign: "center",
                backgroundColor: "#ededed",
                maxWidth: 400,
                position: "sticky",
                bottom: 0,
            }}
            // later , dynamic initializing required
            style={{
                left:
                    winWidth < 600
                        ? `calc(50% - (${
                              ref.current?.clientWidth ?? calcedWidth
                          }px / 2))`
                        : 10,
            }}
        >
            <IconButton
                onClick={() => {
                    isHidden ? show() : hide();
                }}
                sx={{ flex: "1" }}
                size="large"
            >
                {isHidden ? (
                    <AddIcon sx={{ fontSize: 72 }} />
                ) : (
                    <CloseIcon sx={{ fontSize: 48 }} />
                )}
            </IconButton>
            <Box
                sx={{
                    display: isHidden ? "none" : "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h3">{info.name} 님</Typography>
                <Typography variant="h5">잔여포인트</Typography>
                <Typography variant="h3" role="body1">
                    {info.points} pt
                </Typography>
            </Box>
        </Paper>
    );
};

export default ProductTool;
