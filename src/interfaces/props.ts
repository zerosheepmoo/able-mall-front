import React from "react";

// navigations

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

// section

export interface SignInProps {
    handleSignIn: (id?: string, pw?: string) => void;
    email: {
        value: string;
        dispatch: React.Dispatch<React.SetStateAction<string>>;
    };
    pw: {
        value: string;
        dispatch: React.Dispatch<React.SetStateAction<string>>;
    };
}

export interface SignedInProps {
    signout: () => void;
    nickname: string;
    email: string;
    points: number;
}

export interface ServiceCardProps {
    title: string;
    desc: string;
    imgsrc?: string;
    alt?: string;
}
