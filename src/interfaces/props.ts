import React from "react";

// navigations

export interface BottomNavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    locas: string[];
}

export interface NavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    locas: string[];
}

export interface MobAppBarProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    locas: string[];
}

export interface ComplexNavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    winWidth: number;
    locas: string[];
}

// Layouts

interface styleKeyObj {
    [key: string]: string | number;
}

export interface BoardLayoutProps {
    title: string;
    contents: BoardContent[];
    rootSProps?: styleKeyObj;
}

export interface BoardContent {
    title: string;
    date: string;
}

export interface BannerLayoutProps {
    imgsrc: string;
    alt?: string;
    bText?: string;
}
