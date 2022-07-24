import React from 'react'
import './Home.css'
import {Navbar} from "../../component"

class Home extends React.Component {
    render(){

        return (
          <div className='full-page'>
              <div className='Wrapper'>
                  <Navbar />
                  <div className='header-content'>
                      <div className='Logo'>
                          <h1>
                              LOGO
                          </h1>
                      </div>
                      <div className='Logo-p'>
                          <p>
                              An authentic Vietnamese culinary experience
                          </p>
                      </div>
                          <div className='button-space'>
                              <div className='left-button'>
                                  <button type='button' onClick={() => {}}>
                                      View menu
                                  </button>
                              </div>
                              <div className='hdash'></div>
                              <div className='right-button'>
                                  <button type='button' onClick={() => {}}>
                                      Place order
                                  </button>
                              </div>
                      </div>
                  </div>
                  
                  
              </div>
          </div>
        )
      }
    }

export default Home