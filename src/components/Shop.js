import Product from "./Product";
import "../styles/shop.css";
import uniqid from "uniqid";

const Shop = () => {
  //Products Data
  const products = [
    {
      name: "Table",
      price: 50000,
      quantity: 1,
      id: uniqid(),
    },
    {
      name: "Phone Supporter",
      price: 2000,
      quantity: 1,
      id: uniqid(),
    },
    {
      name: "Earphone Supporter",
      price: 2000,
      quantity: 1,
      id: uniqid(),
    },
  ];

  return (
    <div className="shop">
      <h1 className="title">Shop</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
