import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const FOFBody: React.VFC = () => {
    return (
        <Paper
            elevation={5}
            sx={{ m: 4, width: "100%", height: "60vh", textAlign: "center" }}
        >
            <Typography variant="h2" sx={{ mt: 2 }}>
                404 Not Found
            </Typography>
            <Divider sx={{ m: 2 }} />
            <Typography variant="h4" role="body1" sx={{ mb: 2 }}>
                How could you visit here?{"🤔"}
            </Typography>
            <Typography>
                Please, click any tab on the navigation or{" "}
                <Link to="">Go back to Home</Link>
            </Typography>
        </Paper>
    );
};

export default FOFBody;
