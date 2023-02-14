import images from "../images/woodProduct.jpg";
import "../styles/product.css";

const Product = (props) => {
  const { product, handleClick } = props;

  return (
    <div className="product">
      <img src={images} alt={product.name} className="images" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>Description, description Description, description</p>
        <h2>${product.price * product.quantity}</h2>
        <button onClick={() => handleClick(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
