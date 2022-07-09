import React from 'react';
import './App.css';

import { Register, AboutUs, Comment, Home, Menu } from "./pages"


import {Navbar} from "./component"

function App() {
  return (
    <>


       <Navbar/> 
       <Home/>
       <Register />
      <AboutUs />
      <Comment />
     


    </>
  );
}

export default App;
