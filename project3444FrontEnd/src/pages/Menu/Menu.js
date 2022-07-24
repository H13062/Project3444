import React from 'react'
import './Menu.css'
import {images, data} from '../../constants';
import {Navbar} from "../../component"

// console.log("Number of images: ", this.ref.imgContainer.children.length);

class Menu extends React.Component {
    
    render(){
        // var highlight = document.getElementsByClassName('app__menu-img_card');
        // highlight.onclick = () => {
        //     highlight.toggleClass('card-click');
        // }


        const imageList = [images.pho, images.tk, images.bb, images.bm, images.bc, images.roll, images.hotpot, images.ct];
        const dataList = {data};
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
                        <button type='button'>Order to cart</button>
                    </div>
                </div>
                <div className='app__menu-dash'></div>
                <div className='app__menu-img'>
                    <div className='app__menu-img_container' ref='imgContainer'>
                    {imageList.map((image, index) => (
                        <div className='app__menu-img_card' onClick={(e) => e.target.classList.toggle('card-click')} key={`menu_img${index + 1}`}>
                            <img src={image} alt='menu img'/>
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

export default Menu