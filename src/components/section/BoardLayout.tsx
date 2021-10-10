import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { BoardLayoutProps } from "../../interfaces/props";

const BoardLayout: React.VFC<BoardLayoutProps> = (props) => {
    const { title, contents, rootSProps } = props;
    return (
        <Box sx={{ width: "100%", ...rootSProps }}>
            <Box sx={{ display: "flex" }}>
                <Typography variant="h5" sx={{ flex: "4" }}>
                    {title}
                </Typography>
                <IconButton size="small" aria-label="기관조회" color="primary">
                    <AddIcon />
                </IconButton>
            </Box>
            <Divider sx={{ mb: 2 }} />
            {contents.map((c) => {
                return (
                    <Box
                        key={c.title}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            sx={{
                                minWidth: 190,
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                            noWrap
                            variant="body1"
                        >
                            {c.title}
                        </Typography>
                        <Typography
                            sx={{
                                minWidth: 70,
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                            variant="body2"
                            noWrap
                        >
                            {c.date}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default BoardLayout;
