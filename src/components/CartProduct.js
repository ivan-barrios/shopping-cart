import "../styles/cart-product.css";
import images from "../images/woodProduct.jpg";
import { useEffect, useState } from "react";

const CartProduct = (props) => {
  const { product } = props;
  let [quantity, setQuantity] = useState(1);
  let [price, setPrice] = useState();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setPrice(quantity * product.price);
  }, [product.price, quantity]);

  const handleOnChange = () => {
    setQuantity(product.quantity);
  };

  return (
    <div className="cart-list">
      <h1 className="name">{product.name}</h1>
      <img src={images} alt="product" />
      <h2 className="price">${price}</h2>
      <div className="quantity">
        <h2>Quantity:</h2>
        <div className="quantityOp">
          <button onClick={decrementQuantity}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={handleOnChange}
          ></input>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <button className="delete" onClick={() => props.deleteFromCart(product)}>
        Delete
      </button>
    </div>
  );
};

export default CartProduct;
