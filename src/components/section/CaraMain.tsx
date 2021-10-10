import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { red, amber } from "@mui/material/colors";

interface CaraItemProps {
    item: {
        name: string;
        description: string;
        img?: string;
    };
}

const Item = (props: CaraItemProps) => {
    const { name, description, img } = props.item;
    return (
        <Paper
            sx={{
                height: "300px",
                backgroundColor:
                    description.length > 20 ? red[100] : amber[100],
                p: 3,
                position: "relative",
                backgroundImage: img && `url(${img})`,
                backgroundSize: img && "cover",
            }}
            className={"main-cara-paper"}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "stretch",
                }}
            >
                <Box sx={{ color: "#121212", width: "100%" }}>
                    <Typography
                        sx={{ position: "relative", mb: 4 }}
                        variant="h4"
                        role="h2"
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{ position: "relative", mb: 4 }}
                        variant="body1"
                    >
                        {description}
                    </Typography>
                </Box>

                <Button
                    sx={{
                        mt: 8,
                        zIndex: 4,
                        color: "#fafafa",
                        backgroundColor: "#111111",
                        width: 200,
                    }}
                >
                    둘러보기
                </Button>
            </Box>
        </Paper>
    );
};

const CaraMain: React.VFC = () => {
    const items = [
        {
            name: "에이블 몰 오픈!",
            description: "이제 막 개장했어요!!!",
            img: "https://images.unsplash.com/photo-1569937703691-0f9b8cf21a25",
        },
        {
            name: "에쁜 배경 #1",
            description: "The Quick Brown Fox Jumps Over The Lazy Dog!",
        },
        {
            name: "예쁜 배경 #2",
            description: "Hello World!",
        },
    ];

    return (
        <div
            style={{
                width: "100%",
                minWidth: 280,
                marginLeft: 16,
                marginRight: 16,
                flex: 2,
            }}
        >
            <Carousel>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default CaraMain;
