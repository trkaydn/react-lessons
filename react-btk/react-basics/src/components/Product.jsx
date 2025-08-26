
export function Product(props){
  return (
  <>
    <div>Product</div>
    <img src= {'/img/' + props.image + '.jpg' } alt='Product Image' />
  </>
);
}
