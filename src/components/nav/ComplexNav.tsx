import React from "react";
import { ComplexNavProps } from "../../interfaces/props";
import BottomNav from "./BottomNav";
import MobAppBar from "./MobAppBar";
import Nav from "./Nav";

const ComplexNav: React.VFC<ComplexNavProps> = (props) => {
    const { value, handleChange, winWidth, signedIn, goSignIn } = props;

    return (
        <>
            {winWidth >= 600 || (
                <MobAppBar
                    value={value}
                    handleChange={handleChange}
                    signedIn={signedIn}
                    goSignIn={goSignIn}
                />
            )}
            {winWidth >= 600 ? (
                <Nav
                    signedIn={signedIn}
                    value={value}
                    handleChange={handleChange}
                    winWidth={winWidth}
                />
            ) : (
                <BottomNav value={value} handleChange={handleChange} />
            )}
        </>
    );
};

export default ComplexNav;
