import { useContext } from "react";
import Modal from "./UI/Modal";
import { UIContext } from "../contexts/UIContext";
import { CartContext } from "../contexts/CartContext";

export default function Checkout() {
    const { uiProgress, hideCheckout } = useContext(UIContext);
    const { items } = useContext(CartContext);
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Modal open={uiProgress === "checkout"}>
            <h2>Ödeme Yap</h2>
            <p className="text-danger">Sipariş Toplamı: {totalAmount} ₺</p>
            <form noValidate>
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

            </form>
            <div className="d-flex justify-content-end">
                <button className="btn btn-sm btn-danger me-2" onClick={() => hideCheckout()}>Kapat</button>
                <button className="btn btn-sm btn-outline-success me-2">Ödeme Yap</button>
            </div>
        </Modal>
    );
}