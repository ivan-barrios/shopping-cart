import CartProduct from "./CartProduct";

const Cart = (props) => {
  const { cart } = props;

  const emptyCart = cart.length < 1;

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-container">
        <IsEmpty emptyCart={emptyCart} cart={cart} />
      </div>
      <button>Buy Now</button>
    </div>
  );
};

const IsEmpty = (props) => {
  if (props.emptyCart) {
    return <h2>There are no products in the cart</h2>;
  } else {
    props.cart.map((product) => {
      return <CartProduct key={product.id} product={product} />;
    });
  }
};

export default Cart;
