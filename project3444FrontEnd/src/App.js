import React, { useState } from "react";
import "./App.css";
import { Register, AboutUs, Comment, Home, Menu, Contact, Cart } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./component/NavMenu/NavMenu";

function App() {
  // const [testedArray, setTestedArray] = useState(null);

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/project3444" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/comment" element={<Comment />} />
          <Route
            path="/menu"
            element={<Menu cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </Router>
      {/* <Register /> */}
      {/* <AboutUs /> */}
      {/* <Comment /> */}
      {/* <Contact /> */}
      {/* <Home/> */}
    </>
  );
}

export default App;
