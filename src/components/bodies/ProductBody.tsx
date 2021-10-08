import React, { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        author: "@tjdragotta",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        author: "@katie_wasserman",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
        author: "@silverdalex",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
        author: "@shelleypauls",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
        author: "@peterlaster",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        author: "@southside_customs",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast2",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger2",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera2",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee2",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats2",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey2",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball2",
        author: "@tjdragotta",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern2",
        author: "@katie_wasserman",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms2",
        author: "@silverdalex",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil2",
        author: "@shelleypauls",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star2",
        author: "@peterlaster",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike2",
        author: "@southside_customs",
        cols: 2,
    },
];

const ProductBody: React.VFC = () => {
    const [categoryType, setCategoryType] = useState(0);
    const [rating, setRating] = useState<number | null>(4);
    const handleCategory = (event: React.SyntheticEvent, newValue: number) => {
        setCategoryType(newValue);
    };
    return (
        <>
            <Grid container item justifyContent="center" xs={12}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        width: "80%",
                        pt: 1,
                    }}
                >
                    <Tabs
                        variant="fullWidth"
                        sx={{ width: "100%" }}
                        value={categoryType}
                        onChange={handleCategory}
                    >
                        <Tab label="전체" />
                        <Tab label="장난감" />
                        <Tab label="일상" />
                        <Tab label="옷" />
                        <Tab label="공구" />
                        <Tab label="전자기기" />
                        <Tab label="기타" />
                    </Tabs>
                </Box>
            </Grid>
            <Grid container item xs={12} justifyContent="space-around">
                {itemData.map((item) => {
                    if (item.cols && categoryType % 2 === 1) {
                        return <></>;
                    }
                    if (
                        item.rows &&
                        (categoryType === 2 || categoryType === 4)
                    ) {
                        return <></>;
                    }
                    return (
                        <ImageListItem
                            key={item.title}
                            sx={{ mt: 2, mb: 8, ml: 2, mr: 2 }}
                        >
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.54)",
                                        }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                            <Box sx={{ display: "flex" }}>
                                <Typography variant="h6" role="body1">
                                    142,857 원
                                </Typography>
                                <Typography
                                    variant="body2"
                                    role="body1"
                                    style={{ textDecoration: "line-through" }}
                                >
                                    142,857 원
                                </Typography>
                            </Box>
                            <Rating
                                value={rating}
                                onChange={(event, newValue) => {
                                    if (newValue) {
                                        setRating(newValue);
                                    }
                                }}
                            />
                        </ImageListItem>
                    );
                })}
            </Grid>
        </>
    );
};

export default ProductBody;
