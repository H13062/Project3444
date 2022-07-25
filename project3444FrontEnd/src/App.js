import React from 'react';
import './App.css';

import { Register, AboutUs, Comment, Home, Menu, Contact } from "./pages"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Register />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/contacts" element={<Contact />}/>
          <Route path="/comment" element={<Comment />}/>
          <Route path="/menu" element={<Menu />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
