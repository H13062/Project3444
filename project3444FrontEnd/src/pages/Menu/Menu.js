import React from 'react'
import './Menu.css'
import {images} from '../../constants';
import {Navbar} from "../../component"

class Menu extends React.Component {
    // store state
    constructor(prop){
        super(prop);
        let imgSelectedTemp = {}
        const imglist = [images.pho, images.tk, images.bb, images.bm, images.bc, images.roll, images.hotpot, images.ct]

        // loop thru each image to set initial states
        for (let index = 0; index < imglist.length; index++) {
            imgSelectedTemp['image_' + index] = false;
        }

        // assign state
        this.state = {
            isEnabled: false, //button state
            imgSelected: imgSelectedTemp, //images' states
            imglist: imglist //images
        }
    }

    // handle events whenever an image is clicked:
    // -toggle css
    // -run button enabling logic
    handleClicked(event){
        event.target.classList.toggle('card-click');
    
        const id = event.target.id;                     // get ID from image
        var imgSelectedTemp = this.state.imgSelected;   // var variable that stores the images' state
        imgSelectedTemp[id] = !imgSelectedTemp[id];     // change state from false to true and vice versa

        // toggle state of image, then check if theres at least one img with true state
        // if yes, enable button (isEnabled : true)
        // if no, disable button (isEnabled : false)
        for (let imgTemp in imgSelectedTemp) {
            if(imgSelectedTemp[imgTemp] === true){
                this.setState({ isEnabled: true })
                break;
            }
            else{
                this.setState({ isEnabled: false })
            }
        }
    }   

    render(){
        const imageList = this.state.imglist;
        return (
            <>
                <div className='app__menu'>
                    <Navbar />
                    <div className='app__menu-header'>
                        <div className='header-content'>
                            <h1>
                                MENU
                            </h1>
                            <div className='header-p'>
                                <p>
                                    A list of our delicious authentic dishes and cuisine
                                </p>
                            </div>
                        </div>
                        <div className='header-button'>
                            {/* state applied here */}
                            <button type='button' disabled={!this.state.isEnabled} >
                                Order to cart
                            </button>
                        </div>
                    </div>
                    <div className='app__menu-dash'></div>
                    <div className='app__menu-img'>
                        <div className='app__menu-img_container' ref='imgContainer'>
                            {imageList.map((image, index) => (
                                <div className='app__menu-img_card' 
                                onClick={this.handleClicked.bind(this)} // handleCLicked function call
                                key={`menu_img${index + 1}`} 
                                >
                                    <img src={image} alt='menu img' id={'image_' + index}/>
                                    <div>
                                        <h3>Com Suon</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// (e) => e.target.classList.toggle('card-click')

export default Menu