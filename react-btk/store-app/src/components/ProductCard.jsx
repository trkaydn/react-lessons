import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router";
import { currencyTRY } from "../utils/formats";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../pages/cart/cartSlice";

export default function ProductCard({ product }) {

    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.cart);

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
                <Button loading={status === "pendingAddItem" + product.id} onClick={() => dispatch(addItemToCart({ productId: product.id }))}>Sepete Ekle</Button>
            </CardActions>
        </Card>
    );
}