import { useContext } from "react";
import Header from "./components/Header";
import PizzaList from "./components/PizzaList";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeContext } from "./contexts/ThemeContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

export default function App() {

  const { mode } = useContext(ThemeContext);

  return (
    <div className={mode === "light" ? "bg-light text-dark" : "bg-dark text-white"}>
      <Header />
      <ThemeSelector />
      <div className="container my-4">
        <PizzaList />
        <Cart />
        <Checkout />
      </div>
    </div>
  );
}
