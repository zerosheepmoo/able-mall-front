import React from "react";

export interface BottomNavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface NavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface MobAppBarProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface ComplexNavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    winWidth: number;
}
