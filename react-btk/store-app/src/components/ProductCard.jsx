import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router";
import { currencyTRY } from "../utils/formats";
import requests from "../api/apiClient";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export default function ProductCard({ product }) {

    const [loading, setLoading] = useState(false);
    const { setCart } = useCartContext();

    function handleAddItem(productId) {
        setLoading(true);
        requests.cart.addItem(productId).then((response) => {
            setCart(response);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <Card>
            <CardActionArea component={Link} to={`/products/${product.id}`}>
                <CardMedia image={`http://localhost:5000/images/${product.image}`} sx={{ height: 160, backgroundSize: "contain" }} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" color="primary.dark">{product.title}</Typography>
                    <Typography variant="body1" color="secondary.dark">{currencyTRY.format(product.price)}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton>
                    {/* <FavoriteIcon /> */}
                    <FavoriteBorderIcon />
                </IconButton>
                <Button loading={loading} onClick={() => handleAddItem(product.id)}>Sepete Ekle</Button>
            </CardActions>
        </Card>
    );
}