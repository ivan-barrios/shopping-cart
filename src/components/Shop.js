import Product from "./Product";
import "../styles/shop.css";
import products from "../data";

const Shop = (props) => {
  return (
    <div className="shop">
      <h1 className="title">Shop</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleClick={props.handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
