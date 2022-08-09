import React, { useState, useEffect } from "react";
import "./Menu.css";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const Menu = ({ cartItems, setCartItems }) => {
  const apiServerEndpoint = "/api/";

  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7169" + apiServerEndpoint + "dish", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDishes(data);
        console.log(data);
      });
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    //If the item already exist in the shopping cart
    //implement 1 unit
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="menu">
        <div className="header">
          <h1>MENU</h1>
          <p>A list of our delicious authentic dishes and cuisine</p>
        </div>

        <div className="row">
          {dishes.map((dish) => (
            <MenuList key={dish.id} dish={dish} onAdd={onAdd}></MenuList>
          ))}
        </div>
      </div>
    </>
  );
};

// class Menu extends React.Component {
//   constructor(prop) {
//     super(prop);
//     let imgSelectedTemp = {};
//     const imglist = [
//       images.pho,
//       images.tk,
//       images.bb,
//       images.bm,
//       images.bc,
//       images.roll,
//       images.hotpot,
//       images.ct,
//     ];

//     for (let index = 0; index < imglist.length; index++) {
//       imgSelectedTemp["image_" + index] = false;
//     }

//     this.state = {
//       isDisabled: false,
//       imgSelected: imgSelectedTemp,
//       imglist: imglist,
//     };
//   }

//   handleClicked(event) {
//     event.target.classList.toggle("card-click");

//     const id = event.target.id;
//     var imgSelectedTemp = this.state.imgSelected;
//     imgSelectedTemp[id] = !imgSelectedTemp[id];

//     for (let imgTemp in imgSelectedTemp) {
//       if (imgSelectedTemp[imgTemp] === true) {
//         this.setState({
//           isDisabled: true,
//         });
//         break;
//       } else {
//         this.setState({
//           isDisabled: false,
//         });
//       }
//     }
//   }

//   render() {
//     const imageList = this.state.imglist;
//     return (
//       <>
//         <div className="app__menu">
//           <div className="app__menu-header">
//             <div className="header-content">
//               <h1>MENU</h1>
//               <div className="header-p">
//                 <p>A list of our delicious authentic dishes and cuisine</p>
//               </div>
//             </div>
//             <div className="header-button">
//               <button type="button" disabled={!this.state.isDisabled} >
//                 Order to cart
//               </button>
//             </div>
//           </div>
//           <div className="app__menu-dash"></div>
//           <div className="app__menu-img">
//             <div className="app__menu-img_container" ref="imgContainer">
//               {imageList.map((image, index) => (
//                 <div
//                   className="app__menu-img_card"
//                   onClick={this.handleClicked.bind(this)}
//                   disabled={!this.state.isDisabled}
//                   key={`menu_img${index + 1}`}
//                 >
//                   <img src={image} alt="menu img" id={"image_" + index} />
//                   <div>
//                     <h3>Com Suon</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// (e) => e.target.classList.toggle('card-click')

export default Menu;
