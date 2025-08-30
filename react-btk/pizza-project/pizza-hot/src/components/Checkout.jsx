import { useContext } from "react";
import Modal from "./UI/Modal";
import { UIContext } from "../contexts/UIContext";
import { CartContext } from "../contexts/CartContext";
import useFetch from "../hooks/useFetch";

var config = {
    method: 'POST',
    headers: { "Content-Type": "application/json" }
}

export default function Checkout() {
    const { uiProgress, hideCheckout } = useContext(UIContext);
    const { items, clearAll } = useContext(CartContext);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const {data, isLoading, error, sendRequest } = useFetch("http://localhost:3000/orders", config);

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());
        
        sendRequest(JSON.stringify({ order: { items: items, customer: customerData } }))
    }

    function handleClose() {
        hideCheckout();
        clearAll();
    }

    if(data && !error) {
        return (
            <Modal open={uiProgress === "checkout"}>
                <h2>Ödeme Başarılı</h2>
                <p>Teşekkür ederiz, siparişiniz alınmıştır.</p>
                <button className="btn btn-sm btn-danger" onClick={() => handleClose()}>Kapat</button>
            </Modal>
        );
    }

    return (
        <Modal open={uiProgress === "checkout"}>
            <h2>Ödeme Yap</h2>
            <p className="text-danger">Sipariş Toplamı: {totalAmount} ₺</p>
            <form onSubmit={handleSubmit} noValidate>

                {error && <p className="alert alert-danger">{error}</p>}

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ad Soyad:</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>

                <div className="row">
                    <div className="col">
                         <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-Posta:</label>
                            <input type="email" className="form-control" id="email" name="email" />
                        </div>
                    </div>
                    <div className="col">
                         <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Telefon:</label>
                            <input type="tel" className="form-control" id="phone" name="phone" />
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Adres:</label>
                    <textarea className="form-control" id="address" name="address" />
                </div>

                <div className="row">
                    <div className="col">
                         <div className="mb-3">
                            <label htmlFor="city" className="form-label">İl:</label>
                            <input type="text" className="form-control" id="city" name="city" />
                        </div>
                    </div>
                    <div className="col">
                         <div className="mb-3">
                            <label htmlFor="district" className="form-label">İlçe:</label>
                            <input type="text" className="form-control" id="district" name="district" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-sm btn-danger me-2" onClick={() => hideCheckout()}>Kapat</button>
                    <button className="btn btn-sm btn-outline-success me-2">Ödeme Yap</button>
                </div>
            </form>
        </Modal>
    );
}