export default function CartItem({ item, addItem, removeItem }) {

    return (
        <li className="cart-item border-bottom p-2">
            <p>{item.title} - {item.quantity * item.price} ₺</p>
            <div className="actions">
                <button className="btn btn-sm btn-outline-primary" onClick={() => removeItem(item)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-sm btn-outline-primary" onClick={() => addItem(item)}>+</button>
            </div>
        </li>
    );
}
