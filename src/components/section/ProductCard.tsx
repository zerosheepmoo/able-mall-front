import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { ProductCardProps } from "../../interfaces/props";

const ProductCard: React.VFC<ProductCardProps> = (props) => {
    const { item } = props;
    const [rating, setRating] = useState(4);

    return (
        <Paper
            sx={{
                border: "1px solid #aaaaaa",
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: 330,
                width: 250,
            }}
        >
            <div
                style={{
                    flex: 1,
                    height: 200,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        height: "100%",
                    }}
                />
            </div>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h5" role="h4">
                {item.title}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h6" role="body1">
                    {item.price} 원
                </Typography>
                <Typography
                    variant="body2"
                    role="body1"
                    style={{
                        textDecoration: "line-through",
                        marginLeft: 8,
                        color: "grey",
                    }}
                >
                    {item.exPrice && item.exPrice + "원"}
                </Typography>
            </Box>
            <Rating
                value={rating}
                onChange={(event, newValue) => {
                    if (newValue) {
                        setRating(newValue);
                    }
                }}
                sx={{ mb: 2 }}
            />
        </Paper>
    );
};

export default ProductCard;
