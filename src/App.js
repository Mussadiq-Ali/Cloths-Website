import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<Shop category="womens" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<loginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
