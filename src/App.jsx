import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import { ProductProvider } from "./context/ProductContext";
import SingUp from "./components/SingUp";
import SingIn from "./components/SingIn";
import AuthDetails from "./context/AuthDetails";

function App() {
  return (
    <div>
      <ProductProvider>
        <Header />
        <AuthDetails />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/singin" element={<SingIn />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
