import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

const initialState = {
    cart : null,
    status: "idle"
};

export const addItemToCart = createAsyncThunk(
    "cart/addItemToCart",
    async ({productId, quantity = 1}) => {
        try {
            return await requests.cart.addItem(productId, quantity);
        }
        catch (error) {
            console.error("Error adding item to cart:", error);
        }
    }
);

export const deleteItemFromCart = createAsyncThunk(
    "cart/deleteItemFromCart",
    async ({productId, quantity = 1, key = ""}) => {
        try {
            return await requests.cart.deleteItem(productId, quantity);
        }
        catch (error) {
            console.error("Error deleting item from cart:", error);
        }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        SetCart(state, action) {
            state.cart = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addItemToCart.pending, (state, action) => {
            console.log("Adding item to cart...");
            state.status = "pendingAddItem" + action.meta.arg.productId;
        });

        builder.addCase(addItemToCart.fulfilled, (state, action) => {
            console.log("Item added to cart:", action.payload);
            state.cart = action.payload;
            state.status = "idle";
        });
        
        builder.addCase(addItemToCart.rejected, (state, action) => {
            console.error("Failed to delete item from cart:", action.error);
            state.status = "idle";
        });

        builder.addCase(deleteItemFromCart.pending, (state, action) => {
            state.status = "pendingDeleteItem" + action.meta.arg.productId + action.meta.arg.key;
        });

        builder.addCase(deleteItemFromCart.fulfilled, (state, action) => {
            state.cart = action.payload;
            state.status = "idle";
        });
        
        builder.addCase(deleteItemFromCart.rejected, (state, action) => {
            state.status = "idle";
        });
    }
});

export const { SetCart } = cartSlice.actions;