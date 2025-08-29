import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIContextProvider({ children }) {
    const [uiProgress, setUiProgress] = useState("");
    
    function showCart() {
        setUiProgress("cart");
    }

    function hideCart() {
        setUiProgress("");
    }

    function showCheckout() {
        setUiProgress("checkout");
    }

    function hideCheckout() {
        setUiProgress("");
    }

    return(
        <UIContext.Provider value={{ uiProgress, showCart, hideCart, showCheckout, hideCheckout }}>
            {children}
        </UIContext.Provider>
    );
}