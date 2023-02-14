import images from "../images/woodProduct.jpg";
import "../styles/product.css";

const Product = (props) => {
  const handleMore = () => {
    props.product.quantity++;
    console.log(props.product.quantity);
  };

  const handleLess = () => {
    props.product.quantity--;
    console.log(props.product.quantity);
  };

  return (
    <div className="product">
      <img src={images} alt={props.product.name} className="images" />
      <div className="product-info">
        <h1>{props.product.name}</h1>
        <h2>Quantity:</h2>
        <div className="quantity-manager">
          <button disabled={props.product.quantity < 1} onClick={handleLess}>
            -
          </button>
          <input
            type="number"
            id="number"
            value={props.product.quantity}
            readOnly
          />
          <button onClick={handleMore}>+</button>
        </div>
        <h2>${props.product.price * props.product.quantity}</h2>
      </div>
    </div>
  );
};

export default Product;
