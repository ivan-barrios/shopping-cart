import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="company-details">
        <h1>Wodor</h1>
        <h2>Your new door to the wood world!</h2>
      </div>
      <Link to="/shop" className="shop-btn">
        Shop Now!
      </Link>
    </div>
  );
};

export default Home;
