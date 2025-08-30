import useFetch from "../hooks/useFetch";
import Pizza from "./Pizza";

const config = {
  method: "GET",
  cache: "no-cache",
}

export default function PizzaList() {
  const {data, isLoading, error } = useFetch("http://localhost:3000/pizzas", config, []);

  if(isLoading) {
    return <div className="alert alert-warning">Yükleniyor...</div>;
  }

  if(error) {
    return <div className="alert alert-danger">{error}</div>; 
  }

  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {data.map(pizza => (
          <Pizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
