import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

const Home = () => <h2>Home Page</h2>;
const Shop = () => <h2>Shop Page</h2>;
const Cart = () => <h2>Cart Page</h2>;
const Login = () => <h2>Login Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<h2>Wishlist Page</h2>} />
        <Route path="searchpage" element={<SearchPage/>} />
        <Route path="/Contactus" element={<h2>Contact Us Page</h2>} />
        <Route path="/user" element={<h2>User Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
