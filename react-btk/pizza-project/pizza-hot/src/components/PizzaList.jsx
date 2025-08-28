import { useState, useEffect } from "react";
import Pizza from "./Pizza";

export default function PizzaList() {
  const [loadedPizzas, setLoadedPizzas] = useState([]);

  async function GetPizzaList() {
    const response = await fetch("http://localhost:3000/pizzas");

    if(!response.ok) {
      console.log("Error fetching pizzas");
      return;
    }

    const pizzas = await response.json();
    setLoadedPizzas(pizzas);
  }

  useEffect(() => {
    GetPizzaList();
  }, []);

  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {loadedPizzas.map(pizza => (
          <Pizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
