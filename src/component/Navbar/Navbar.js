import React from 'react'
import {images} from '../../constants';
import { GiHamburgerMenu } from 'react-icons/gi'; //must import from folder gi in react icons
import {MdShoppingCart, MdOutlineRestaurantMenu} from 'react-icons/md'; //must import from folder md from react icons

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className = "app__navbar">
        {/*This part adding logo*/}
        <div className='app__navbar-logo'> 
          LOGO
        </div>
        {/*THis part contains words of navba*/}
        <ul className = "app__navbar-links">
            <li className = "p__opensans"><a href ="/home">Home</a></li>
            <li className = "p__opensans"><a href ="/about">About</a></li>
            <li className = "p__opensans"><a href ="/menu">Menu</a></li>
            <li className = "p__opensans"><a href ="/contacts">Contacts</a></li>
            <li className = "p__opensans"><a href ="/comment">Comment</a></li>
        </ul>
        <div className = 'app__navbar-access'>
            <a href ="/login" className ="p__opensans">Login / Register</a>
            <div/>
            <a href ="/order" className ="p__opensans">Order</a>
            <div/>
            <MdShoppingCart />
        </div>
        <div className = "app__navbar-mobile">
            <GiHamburgerMenu color= '#000000' fontSize = {27} onClick= {() => setToggleMenu(true)} />
        </div>
        {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay '>
                      <MdOutlineRestaurantMenu fontSize={27} className ="overlay__close" onClick={() => setToggleMenu(false)}/>
                      <ul className = "app__navbar-smallscreen-links">
                        <li className = "p__opensans"><a href ="/home">Home</a></li>
                        <li className = "p__opensans"><a href ="/about">About</a></li>
                        <li className = "p__opensans"><a href ="/menu">Menu</a></li>
                        <li className = "p__opensans"><a href ="/contacts">Contacts</a></li>
                        <li className = "p__opensans"><a href ="/comment">Comment</a></li>
                        <li className = "p__opensans"><a href ="/login">Login/Register</a></li>
                      </ul>
                </div>
              )
        }
    </nav>
        
  )
}

export default Navbar