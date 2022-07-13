import React from 'react'
import './Menu.css'
import {images, data} from '../../constants';
import {Navbar} from "../../component"

const Menu = () => {
    
    const imageList = [images.pho, images.hotpot, images.tk, images.ct, images.bb, images.bm, images.bc, images.roll];
    const dataList = {data};
    return (
    <>
        <div className='app__menu'>
            <Navbar />
            <div className='app__menu-header'>
                <h1>
                    MENU
                </h1>
                <div className='header-p'>
                    <p>
                        A list of our delicious authentic dishes and cuisine
                    </p>
                </div>
            </div>
            <div className='app__menu-dash'></div>
            <div className='app__menu-img'>
                <div className='app__menu-img_container'>
                {imageList.map((image, index) => (
                    <div className='app__menu-img_card' key={`menu_img${index + 1}`}>
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

export default Menu