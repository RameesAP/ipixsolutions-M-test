import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import SingleProduct from "./pages/SingleProduct";
import CategoryListing from "./pages/CategoryListing";
import CategoryProducts from "./pages/CategoryProducts";
import Nav from "./components/Nav";
import GetAllUsers from "./pages/GetAllUsers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/category-listing" element={<CategoryListing />} />
        <Route path="/getallusers" element={<GetAllUsers />} />
        <Route path="/category-products/:id" element={<CategoryProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
