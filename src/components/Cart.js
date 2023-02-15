import CartProduct from "./CartProduct";
import "../styles/cart.css";

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <CartProduct
              key={product.id}
              product={product}
              deleteFromCart={props.deleteFromCart}
            />
          );
        })}
      </div>
      <button>Buy Now</button>
    </div>
  );
};

export default Cart;
