export default function Item({item, onRemoveItem, onUpdateItem}){
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => onUpdateItem(item.id)} />
      <span style={item.completed ? {textDecoration: "line-through"} : {} }>{item.quantity} {item.title}</span>
      <button onClick={() => onRemoveItem(item.id)}>X</button>
    </li>
  )
}