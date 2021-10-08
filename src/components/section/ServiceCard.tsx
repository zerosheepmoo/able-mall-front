import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { ServiceCardProps } from "../../interfaces/props";

const ServiceCard: React.VFC<ServiceCardProps> = (props) => {
    const { title, desc, imgsrc, alt } = props;
    const [liked, setLiked] = useState(false);
    return (
        <Card sx={{ maxWidth: 345, m: 4, position: "relative" }}>
            <CardMedia component="img" height="140" image={imgsrc} alt={alt} />
            <CardContent sx={{ mb: 4 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Box
                    sx={{
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Box sx={{ display: "flex", flex: 1 }}>
                        <Button size="small">신청하기</Button>
                        <Button size="small">자세히</Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                        }}
                    >
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                        <IconButton onClick={(e) => setLiked(!liked)}>
                            <FavoriteIcon color={liked ? "error" : "action"} />
                        </IconButton>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};

export default ServiceCard;
