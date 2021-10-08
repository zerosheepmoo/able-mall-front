import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { SignedInProps } from "../../interfaces/props";
import Typography from "@mui/material/Typography";

const SignedIn: React.VFC<SignedInProps> = (props) => {
    const { signout, nickname, email, points } = props;

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                width: "100%",
            }}
        >
            <Paper sx={{ mt: 3, p: 2 }} elevation={4}>
                <Box
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h4" role="body1">
                        {nickname} 님
                    </Typography>
                    <Typography variant="h6" role="body1">
                        {email}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        pt: 2,
                        pb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography>잔고: </Typography>
                    <Typography>{points}pt</Typography>
                </Box>
                <Typography sx={{ pt: 2, pb: 2 }}>장애종류: </Typography>
                <Typography sx={{ pt: 2, pb: 2 }}>장애등급: </Typography>
            </Paper>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => signout()}
            >
                로그아웃
            </Button>
        </Container>
    );
};

export default SignedIn;
