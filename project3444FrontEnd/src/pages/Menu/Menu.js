import React from "react";
import "./Menu.css";
import { images } from "../../constants";
import { Navbar } from "../../component";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(prop) {
    super(prop);
    let imgSelectedTemp = {};
    const imglist = [
      images.pho,
      images.tk,
      images.bb,
      images.bm,
      images.bc,
      images.roll,
      images.hotpot,
      images.ct,
    ];

    for (let index = 0; index < imglist.length; index++) {
      imgSelectedTemp["image_" + index] = false;
    }

    this.state = {
      isDisabled: false,
      imgSelected: imgSelectedTemp,
      imglist: imglist,
    };
  }

  handleClicked(event) {
    event.target.classList.toggle("card-click");

    const id = event.target.id;
    var imgSelectedTemp = this.state.imgSelected;
    imgSelectedTemp[id] = !imgSelectedTemp[id];

    for (let imgTemp in imgSelectedTemp) {
      if (imgSelectedTemp[imgTemp] === true) {
        this.setState({
          isDisabled: true,
        });
        break;
      } else {
        this.setState({
          isDisabled: false,
        });
      }
    }
  }

  render() {
    const imageList = this.state.imglist;
    return (
      <>
        <div className="app__menu">
          <div className="app__menu-header">
            <div className="header-content">
              <h1>MENU</h1>
              <div className="header-p">
                <p>A list of our delicious authentic dishes and cuisine</p>
              </div>
            </div>
            <div className="header-button">
              <button type="button" disabled={!this.state.isDisabled}>
                Order to cart
              </button>
            </div>
          </div>
          <div className="app__menu-dash"></div>
          <div className="app__menu-img">
            <div className="app__menu-img_container" ref="imgContainer">
              {imageList.map((image, index) => (
                <div
                  className="app__menu-img_card"
                  onClick={this.handleClicked.bind(this)}
                  disabled={!this.state.isDisabled}
                  key={`menu_img${index + 1}`}
                >
                  <img src={image} alt="menu img" id={"image_" + index} />
                  <div>
                    <h3>Com Suon</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

// (e) => e.target.classList.toggle('card-click')

export default Menu;
