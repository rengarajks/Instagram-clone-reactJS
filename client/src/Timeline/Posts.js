import React from 'react'

import {Avatar} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';


import './Posts.css'

function Posts({username,image,likes,timeAt}) {
  return (
    <div className='single-post'>

      <div className='post-header'>
        
        <div className='post-header-author'>
           <Avatar src='https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            {username}
            <span> . {timeAt}h</span>
        </div>

        <MoreHorizIcon/>
      </div>

      <div className='post-image'>
        <img src={image} alt=''/>

      </div>


      <div className='post-footer'>

        <div className='post-footer-icons'>

          <div className='post-footer-icon-main'>
            <FavoriteBorderIcon className='footer-icon'/>
            <CommentIcon className='footer-icon'/>
            <TelegramIcon className='footer-icon'/>
          </div>


          <div className='post-footer-icon-save'>
            <BookmarkIcon/>
          </div>

         
        </div>

        Liked by {likes} people


      </div>

    </div>
  )
}

export default Posts