import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
