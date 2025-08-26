import { Product } from "./Product";
import { Footer } from "./Footer";

export default function ProductList() {
  return (
  <>
  <h2>Product List</h2>
    <Product image="1"/>
    <Product image="2"/>
    <Product image="3"/>
    <Footer />
  </>
  );
}
