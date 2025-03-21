import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <h2>Home Page</h2>;
const Shop = () => <h2>Shop Page</h2>;
const Cart = () => <h2>Cart Page</h2>;
const Login = () => <h2>Login Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
