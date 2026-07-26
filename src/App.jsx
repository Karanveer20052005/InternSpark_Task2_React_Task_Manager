import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/edit-product/:id" element={<EditProduct />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;