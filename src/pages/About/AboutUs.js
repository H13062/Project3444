import React from 'react'

import {images} from '../../constants';

const AboutUs = () => {
  return (
    <div className='app__aboutus'>
        <div className='app__aboutus-header'>
            <h1>About Us</h1>
        </div>

        <div className='app__aboutus-content'>
            <div className='app__aboutus-content_p'>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut!
                </p>
            </div>
            <div className='about-dash'></div>
            <div className='app__aboutus-content_img'>
                <img src={images.history} alt='history pic'/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs