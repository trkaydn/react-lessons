import { createContext, useReducer } from "react";
import cartReducer from "../reducers/CartReducer";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatch({ type: "ADD_ITEM", item });
    }

    function updateItem() {

    }

    function removeItem(item) {
        dispatch({ type: "REMOVE_ITEM", item });
    }

    function clearAll() {
        dispatch({ type: "CLEAR_CART" });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearAll
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}