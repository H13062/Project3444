// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi"; //must import from folder gi in react icons
// import { MdShoppingCart, MdOutlineRestaurantMenu } from "react-icons/md"; //must import from folder md from react icons
import "./NavMenu.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavMenu = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="app__navbar">
        <NavbarBrand style={{ fontSize: "45px" }} href="/">
          LOGO
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="nav-item">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/menu">Menu</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/contacts">Contacts</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/comment">Comment</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/login">Login / Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  //   return (
  //     <nav className="app__navbar">
  //       {/*This part adding logo*/}
  //       <div className="app__navbar-logo">
  //         <Link to="/">LOGO</Link>
  //       </div>
  //       <ul className="app__navbar-links">
  //         <li className="p__opensans">
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li className="p__opensans">
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li className="p__opensans">
  //           <Link to="/menu">Menu</Link>
  //         </li>
  //         <li className="p__opensans">
  //           <Link to="/contacts">Contacts</Link>
  //         </li>
  //         <li className="p__opensans">
  //           <Link to="/comment">Comment</Link>
  //         </li>
  //       </ul>
  //       <ul className="app__navbar-access">
  //         <li className="p__opensans">
  //           <Link to="/login">Login / Register</Link>
  //         </li>
  //         <div />
  //         <li className="p__opensans">
  //           <Link to="/cart">
  //             <MdShoppingCart style={{ color: "black" }} />
  //           </Link>
  //         </li>
  //       </ul>
  //       <div className="app__navbar-smallscreen">
  //         <GiHamburgerMenu
  //           color="#000000"
  //           fontSize={27}
  //           onClick={() => setToggleMenu(true)}
  //         />
  //       </div>
  //       {toggleMenu && (
  //         <div className="app__navbar-smallscreen_overlay ">
  //           <MdOutlineRestaurantMenu
  //             fontSize={27}
  //             className="overlay__close"
  //             onClick={() => setToggleMenu(false)}
  //           />
  //           <ul className="app__navbar-smallscreen-links">
  //             <li className="p__opensans">
  //               <Link to="/home">Home</Link>
  //             </li>
  //             <li className="p__opensans">
  //               <Link to="/about">About</Link>
  //             </li>
  //             <li className="p__opensans">
  //               <Link to="/menu">Menu</Link>
  //             </li>
  //             <li className="p__opensans">
  //               <Link to="/contacts">Contacts</Link>
  //             </li>
  //             <li className="p__opensans">
  //               <Link to="/comment">Comment</Link>
  //             </li>
  //             <li className="p__opensans">
  //               <Link to="/login">Login/Register</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </nav>
  //   );
};

export default NavMenu;
