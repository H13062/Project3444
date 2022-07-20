import React from 'react'
import './aboutus.css';
import {images} from '../../constants';
import {Navbar} from "../../component"

class AboutUs extends React.Component {
  render(){
            return (
            <div className='app__aboutus'>
                <Navbar />
                <div className='app__aboutus-cell'>
                    <div className='app__aboutus-header'>
                        <h1>About Us</h1>
                    </div>
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
                        <b></b>
                        <p>
                        Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem!
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
}
export default AboutUs
