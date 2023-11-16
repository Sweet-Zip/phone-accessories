import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Brands from "./pages/Brands";
import ProductItems from "./pages/ProductItems";

const App = () => {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/phone-accessories" element={<Home />} />
      <Route path="/phone-accessories/home" element={<Home />} />
      <Route path="/phone-accessories/categories" element={<Categories />} />
      <Route path="/phone-accessories/product" element={<ProductItems />} />
      <Route path="/phone-accessories/brands" element={<Brands />} />
      <Route path="/phone-accessories/Contact" element={<Contact />} />
      <Route path="/phone-accessories/About" element={<About />} />
    </Routes>
  );
};

export default App;
