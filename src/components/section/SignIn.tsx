import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { SignInProps } from "../../interfaces/props";

const SignIn: React.VFC<SignInProps> = (props) => {
    const { handleSignIn, email, pw, goSignUp } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const _email = data.get("email")?.toString();
        const _pw = data.get("password")?.toString();
        console.log({
            email: _email,
            password: _pw,
        });
        handleSignIn(event, _email, _pw);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar
                    sx={{
                        m: 1,
                        width: 56,
                        height: 56,
                        bgcolor: "primary.main",
                    }}
                >
                    <LockOutlinedIcon fontSize="large" />
                </Avatar>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="이메일주소"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => email.dispatch(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => pw.dispatch(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="아이디 기억하기"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                비밀번호 찾기
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link onClick={(e) => goSignUp()} variant="body2">
                                {"처음이신가요?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
export default SignIn;
