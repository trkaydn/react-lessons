import { Paper, TableContainer, Table, TableCell, TableRow, TableHead, TableBody, Typography, IconButton, CircularProgress, Button } from "@mui/material";
import { currencyTRY } from "../utils/formats";
import { Delete } from "@mui/icons-material";
import { useCartContext } from "../context/CartContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";
import requests from "../api/apiClient";

export default function Cart() {
    const { cart, setCart } = useCartContext();
    const [status, setStatus] = useState({ loading: false, id: "" });

    const subTotal = cart?.cartItems.reduce((sum, item) => sum + item.product.price * item.product.quantity, 0) || 0;
    const tax = subTotal * 0.2;
    const total = subTotal + tax;

    function handleAddItem(productId) {
        setStatus({ loading: true, id: productId, type: "add" });

        requests.cart.addItem(productId).then((response) => {
            setCart(response);
        })
            .catch((error) => {
                console.error("Error adding item to cart:", error);
            })
            .finally(() => {
                setStatus({ loading: false, id: "" });
            });
    }

    function handleRemoveItem(productId, quantity = 1, type = "remove") {
        setStatus({ loading: true, id: productId, type: type });
        requests.cart.deleteItem(productId, quantity).then((response) => {
            setCart(response);
        })
            .catch((error) => {
                console.error("Error removing item from cart:", error);
            })
            .finally(() => {
                setStatus({ loading: false, id: "" });
            });
    }

    if (!cart || cart.cartItems.length === 0) return <Typography component="h4">Sepetiniz Boş</Typography>;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: 100 }}></TableCell>
                        <TableCell>Ürün</TableCell>
                        <TableCell sx={{ width: 120 }}>Fiyat</TableCell>
                        <TableCell sx={{ width: 170 }}>Adet</TableCell>
                        <TableCell sx={{ width: 120 }}>Toplam</TableCell>
                        <TableCell sx={{ width: 50 }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.cartItems.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <img src={`http://localhost:5000/images/${item.product.image}`} alt={item.product.title} style={{ width: "100%" }} />
                            </TableCell>
                            <TableCell>{item.product.title}</TableCell>
                            <TableCell>{currencyTRY.format(item.product.price)}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleAddItem(item.product.productId)}>
                                    {
                                        status.loading && status.id === item.product.productId && status.type === "add" ? <CircularProgress size={20} /> :
                                            <AddCircleOutlineIcon />
                                    }
                                </Button>
                                {item.product.quantity}
                                <Button onClick={() => handleRemoveItem(item.product.productId)}>
                                    {
                                        status.loading && status.id === item.product.productId && status.type === "remove" ? <CircularProgress size={20} /> :
                                            <RemoveCircleOutlineIcon />
                                    }
                                </Button>
                            </TableCell>
                            <TableCell>{currencyTRY.format(item.product.price * item.product.quantity)}</TableCell>
                            <TableCell>
                                <Button color="error" onClick={() => handleRemoveItem(item.product.productId, item.product.quantity, "removeall")}>
                                    {
                                        status.loading && status.id === item.product.productId && status.type === "removeall" ? <CircularProgress size={20} /> :
                                            <Delete />
                                    }
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="right" colSpan={5}>Ara Toplam</TableCell>
                        <TableCell align="right" colSpan={5}>{currencyTRY.format(subTotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" colSpan={5}>KDV</TableCell>
                        <TableCell align="right" colSpan={5}>{currencyTRY.format(tax)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" colSpan={5}>Toplam Tutar</TableCell>
                        <TableCell align="right" colSpan={5}>{currencyTRY.format(total)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}