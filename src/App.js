import React from 'react';
import './App.css';
import { Register, AboutUs } from "./pages"
import {Navbar} from "./component"

function App() {
  return (
    <>
      <Navbar/>
       <Register />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
