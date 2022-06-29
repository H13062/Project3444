import React from 'react'
import './comment.css';
import {images} from '../../constants';

const Comment = () => {
  return (
    <div className='app__comment'>
        <div className='app__comment-header'>
            <h1>Comment</h1>
            <p>Let us know about our experience</p>
        </div>
        <div className='app__comment-field'>
            <div className='app__comment-field_input'>
                <input placeholder='Give us your comment on the rerstaurant'/>
                <button type='submit'>Post Comment</button>
            </div>

            <div className='comment-dash'></div>
            
            <div className='app__comment-field_'>

            </div>
        </div>
    </div>
  )
}

export default Comment