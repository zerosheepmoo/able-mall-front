import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PolicyIcon from "@mui/icons-material/Policy";
import { BottomNavProps } from "../../interfaces/props";

const BottomNav: React.VFC<BottomNavProps> = (props) => {
    const { value, handleChange } = props;
    return (
        <BottomNavigation
            sx={{
                width: "100%",
                position: "fixed",
                bottom: 0,
                backgroundColor: "primary.main",
                height: 70,
                zIndex: 10,
            }}
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label="홈"
                value={0}
                icon={<HomeIcon fontSize="large" />}
            />
            <BottomNavigationAction
                label="서비스신청"
                value={2}
                icon={<AddCircleOutlineIcon fontSize="large" />}
            />
            <BottomNavigationAction
                label="상품구매"
                value={3}
                icon={<ShoppingCartIcon fontSize="large" />}
            />
            <BottomNavigationAction
                label="정책조회"
                value={4}
                icon={<PolicyIcon fontSize="large" />}
            />
        </BottomNavigation>
    );
};

export default BottomNav;
