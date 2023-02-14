const CartProduct = (props) => {
  const { product } = props;

  return (
    <div className="cart-list">
      <h1>{product.name}</h1>
      <h2>${product.price}</h2>
      <h2>Quantity:</h2>
      <div className="quantity">
        <button>-</button>
        <input></input>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartProduct;
