import Modal from "./UI/Modal";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./UI/CartItem";
import { UIContext } from "../contexts/UIContext";

export default function Cart() {

    const {items, addItem, removeItem} = useContext(CartContext);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const { uiProgress, hideCart, showCheckout } = useContext(UIContext);

    return (
        <Modal open={uiProgress === "cart"}>
            <h2>Sepetiniz</h2>
            {items.length === 0 ? (<div className="alert alert-danger">Sepetinizde ürün bulunmamaktadır.</div>) : 
            (
                <ul className="cart-items">
                    {items.map(item => (
                        <CartItem key={item.id} item={item}  addItem={addItem} removeItem={removeItem} />
                    ))}
                </ul>
            )}

            <div className="cart-summary">
                {totalAmount > 0 && <p className="badge text-bg-success mb-0 fs-5">{totalAmount} ₺</p>}
                <div className="modal-actions text-end">
                    <button className="btn btn-sm btn-danger me-2" onClick={() => hideCart()}>Kapat</button>
                    {items.length > 0 && (
                        <button className="btn btn-sm btn-outline-success" onClick={() => showCheckout()}>Sipariş Ver</button>
                    )}
                </div>
            </div>
        </Modal>
    );
}