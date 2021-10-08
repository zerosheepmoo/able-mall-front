import React from "react";
import { ComplexNavProps } from "../../interfaces/props";
import BottomNav from "./BottomNav";
import MobAppBar from "./MobAppBar";
import Nav from "./Nav";

const ComplexNav: React.VFC<ComplexNavProps> = (props) => {
    const { value, handleChange, winWidth } = props;

    return (
        <>
            {winWidth >= 600 || (
                <MobAppBar value={value} handleChange={handleChange} />
            )}
            {winWidth >= 600 ? (
                <Nav value={value} handleChange={handleChange} />
            ) : (
                <BottomNav value={value} handleChange={handleChange} />
            )}
        </>
    );
};

export default ComplexNav;
