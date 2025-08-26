import Item from './Item.jsx';  
export default function List({items, onRemoveItem, onUpdateItem}) {

  if (items.length === 0) {
    return <p className="empty">Henüz ürün eklemediniz.</p>
  }

  return (
    <div className="list">
      <ul>
       {
        items.map(item => (
          <Item item={item} key={item.id} onRemoveItem={onRemoveItem} onUpdateItem={onUpdateItem} />
        ))
       }
      </ul>
    </div>
  )
}