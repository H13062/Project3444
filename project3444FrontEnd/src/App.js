import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Register, AboutUs, Comment, Home, Menu, Contact } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/project3444" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/menu" element={<Menu />} />
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
