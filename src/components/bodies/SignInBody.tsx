import React, { useState } from "react";
import Box from "@mui/material/Box";
import SignedIn from "../section/SignedIn";
import SignIn from "../section/SignIn";
import { SignInBodyProps } from "../../interfaces/props";

const SignInBody: React.VFC<SignInBodyProps> = (props) => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const { goSignUp, isSignedIn, setIsSignedIn, gohome, info } = props;

    const handleSignIn = (
        e: React.SyntheticEvent,
        email?: string,
        pw?: string
    ) => {
        if (!email) {
            alert("Plz, input an email!");
        } else if (!pw) {
            alert("Plz, input an password!");
        } else if (email === "able@ablemall.com" && pw === "mall") {
            setIsSignedIn(true);
            gohome(e);
        } else {
            alert(
                "There is no such user! or Wrong pw!\nPlz input the test account:\nemail: able@ablemall.com, pw: mall"
            );
        }
    };
    const signOut = () => {
        setIsSignedIn(false);
    };

    return (
        <Box sx={{ pb: 2, mr: 2, mb: 4, flex: 1 }}>
            {isSignedIn ? (
                <SignedIn info={info} signout={signOut} />
            ) : (
                <SignIn
                    email={{ value: email, dispatch: setEmail }}
                    pw={{ value: pw, dispatch: setPw }}
                    handleSignIn={handleSignIn}
                    goSignUp={goSignUp}
                />
            )}
        </Box>
    );
};

export default SignInBody;
