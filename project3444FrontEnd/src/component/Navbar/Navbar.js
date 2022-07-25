import React from 'react'
import {images} from '../../constants';
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'; //must import from folder gi in react icons
import {MdShoppingCart, MdOutlineRestaurantMenu} from 'react-icons/md'; //must import from folder md from react icons
import './Navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className = "app__navbar">
        {/*This part adding logo*/}
        <div className='app__navbar-logo'>
        <Link to ="/home">
            LOGO
          </Link> 
        </div>
        {/*THis part contains words of navba*/}
        <ul className = "app__navbar-links">
          <li className = "p__opensans"><Link to ="/home">Home</Link></li>
          <li className = "p__opensans"><Link to ="/about">About</Link></li>
          <li className = "p__opensans"><Link to ="/menu">Menu</Link></li>
          <li className = "p__opensans"><Link to ="/contacts">Contacts</Link></li>
          <li className = "p__opensans"><Link to ="/comment">Comment</Link></li>
        </ul>
        <div className = 'app__navbar-access'>
          <a href ="/login" className ="p__opensans">Login / Register</a>
        <div/>
          <MdShoppingCart style={{color: 'black'}} />
        </div>
        <div className = "app__navbar-smallscreen">
            <GiHamburgerMenu color= '#000000' fontSize = {27} onClick= {() => setToggleMenu(true)} />
        </div>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay '>
                <MdOutlineRestaurantMenu fontSize={27} className ="overlay__close" onClick={() => setToggleMenu(false)}/>
                <ul className = "app__navbar-smallscreen-links">
                  <li className = "p__opensans"><Link to ="/home">Home</Link></li>
                  <li className = "p__opensans"><Link to ="/about">About</Link></li>
                  <li className = "p__opensans"><Link to ="/menu">Menu</Link></li>
                  <li className = "p__opensans"><Link to ="/contacts">Contacts</Link></li>
                  <li className = "p__opensans"><Link to ="/comment">Comment</Link></li>
                  <li className = "p__opensans"><Link to ="/login">Login/Register</Link></li>
                </ul>
          </div>
        )}
    </nav>
        
  )
}

export default Navbar