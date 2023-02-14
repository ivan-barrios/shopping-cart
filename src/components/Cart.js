import CartProduct from "./CartProduct";

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-container">
        {cart.map((product) => {
          return <CartProduct key={product.id} product={product} />;
        })}
      </div>
      <button>Buy Now</button>
    </div>
  );
};

export default Cart;
