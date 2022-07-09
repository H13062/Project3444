import React from 'react';
import './App.css';

import { Register, AboutUs, Comment, Home, Menu, Contact } from "./pages"



import {Navbar} from "./component"

function App() {
  return (
    <>
      <Navbar/> 
      {/* <Register /> */}
      {/* <AboutUs /> */}
      <Comment />
      {/* <Contact /> */}
      {/* <Home/>*/}
    </>
  );
}

export default App;
