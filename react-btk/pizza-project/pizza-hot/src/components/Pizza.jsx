import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

export default function Pizza({...props}) {

  const { color } = useContext(ThemeContext);
  const { addItem } = useContext(CartContext);

  function handleAddItem() {
    addItem(props);
  }

  return (
    <div className="col">
      <div className="card item">
        <img
          src={`http://localhost:3000/images/${props.image}`}
          alt={props.title}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">
            {props.description}
          </p>
          <div className="item-price">
            <b>{props.price} ₺</b>
            <button className={`btn btn-sm btn-outline-${color}`} onClick={handleAddItem}>Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
}
