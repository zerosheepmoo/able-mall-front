import React from "react";
import { ProductType } from "./consts";

// navigations

export interface BottomNavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface NavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    signedIn: boolean;
    winWidth: number;
}

export interface MobAppBarProps {
    signedIn: boolean;
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    goSignIn: () => void;
}

export interface ComplexNavProps {
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    winWidth: number;
    signedIn: boolean;
    goSignIn: () => void;
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
    handleSignIn: (e: React.SyntheticEvent, id?: string, pw?: string) => void;
    email: {
        value: string;
        dispatch: React.Dispatch<React.SetStateAction<string>>;
    };
    pw: {
        value: string;
        dispatch: React.Dispatch<React.SetStateAction<string>>;
    };
    goSignUp: () => void;
}

export interface HumanInfo {
    name: string;
    email: string;
    points: number;
    type: string;
    level: string;
}

export interface SignedInProps {
    signout: () => void;
    info: HumanInfo;
}

export interface ServiceCardProps {
    title: string;
    desc: string;
    imgsrc?: string;
    alt?: string;
}

export interface ProductCardProps {
    item: ProductItem;
}

export interface ProductItem {
    title: string;
    category: ProductType;
    price: number;
    img?: string;
    alt?: string;
    rating?: number;
    exPrice?: number;
}

export interface ProductToolProps {
    info: HumanInfo;
}

// body

export interface AuthBodyProps {
    winWidth: number;
}

// export interface MainBodyProps {}

export interface SignInBodyProps {
    goSignUp: () => void;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    gohome: (event: React.SyntheticEvent) => void;
    info: HumanInfo;
}

export interface ProductBodyProps {
    info: HumanInfo;
}
