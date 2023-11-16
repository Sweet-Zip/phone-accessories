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
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/product" element={<ProductItems />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default App;
