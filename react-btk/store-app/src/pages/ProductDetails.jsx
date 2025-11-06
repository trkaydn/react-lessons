import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import requests from "../api/apiClient";
import { useCartContext } from "../context/CartContext";

export default function ProductDetails() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useCartContext();

    const cartItem = cart?.cartItems.find((i) => i.product.productId == product?.id);

    function handleAddItem(productId) {
        setIsAdding(true);
        requests.cart.addItem(productId).then((response) => {
            setCart(response);
        })
            .catch((error) => {
                console.error("Error adding item to cart:", error);
            })
            .finally(() => {
                setIsAdding(false);
            });
    }

    useEffect(() => {
        async function fetchProductDetails() {
            try {
                const response = await requests.products.details(id);
                setProduct(response);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <Loading message="Loading product details..." />;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <ProductItem product={product} handleAddItem={handleAddItem} cartItem={cartItem} isAdding={isAdding} />
    );
}