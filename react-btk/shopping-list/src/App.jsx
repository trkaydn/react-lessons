import { useState } from 'react'
import './App.css'
import { data } from './data.js'
import Form from './Form.jsx'
import Header from './Header.jsx'
import List from './List.jsx'
import Summary from './Summary.jsx'


function App() {
  const [items, setItems] = useState(data);

  function handleaddItem(item) {
    setItems((items) =>[...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) => items.map(item => {
      if (item.id === id) {
        return {...item, completed: !item.completed};
      }
      return item;
    }));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleaddItem} onClearItems={handleClearItems} />
      <List items={items} onRemoveItem={handleRemoveItem} onUpdateItem={handleUpdateItem} />
      <Summary itemCount={items.length} />
      </div>
  )
}

export default App
