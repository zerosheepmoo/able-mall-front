import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { red, amber } from "@mui/material/colors";

interface CaraItemProps {
    item: {
        name: string;
        description: string;
    };
}

const Item = (props: CaraItemProps) => {
    return (
        <Paper
            sx={{
                height: "300px",
                backgroundColor:
                    props.item.description.length > 20 ? red[100] : amber[100],
                p: 3,
            }}
        >
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button
                sx={{
                    color: "#fafafa",
                    backgroundColor: "#111111",
                }}
            >
                둘러보기
            </Button>
        </Paper>
    );
};

const CaraMain: React.VFC = () => {
    const items = [
        {
            name: "원하는 내용이나 사진 #1",
            description: "The Quick Brown Fox Jumps Over The Lazy Dog!",
        },
        {
            name: "원하는 내용이나 사진 #2",
            description: "Hello World!",
        },
    ];

    return (
        <div style={{ width: "100%", marginLeft: 16, marginRight: 16 }}>
            <Carousel>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default CaraMain;
