import React from 'react'

import {Avatar} from '@mui/material'

import './Suggestion.css'

function Suggestion() {
  return (
    <div className='suggestion-main'>

      <div className='suggestion-title'>Suggestion for you</div>

      <div className='suggestion-divs'>

        <div className='suggestion-div-single'>
           <div className='suggestion-div-flex'>
            <Avatar>R</Avatar>
            <div>
            <div>sam</div>
            <div className='new-to-instagram-suggestion'>New to instagram</div>
            </div>
          </div>

         <div> <button className='suggestion-btn'>Follow</button></div>
        </div>



        <div className='suggestion-div-single'>
           <div className='suggestion-div-flex'>
            <Avatar>R</Avatar>
            <div>
            <div>sam</div>
            <div className='new-to-instagram-suggestion'>New to instagram</div>
            </div>
          </div>

         <div> <button className='suggestion-btn'>Follow</button></div>
        </div>


        <div className='suggestion-div-single'>
           <div className='suggestion-div-flex'>
            <Avatar>R</Avatar>
            <div>
            <div>sam</div>
            <div className='new-to-instagram-suggestion'>New to instagram</div>
            </div>
          </div>

         <div> <button className='suggestion-btn'>Follow</button></div>
        </div>


        <div className='suggestion-div-single'>
           <div className='suggestion-div-flex'>
            <Avatar>R</Avatar>
            <div>
            <div>sam</div>
            <div className='new-to-instagram-suggestion'>New to instagram</div>
            </div>
          </div>

         <div> <button className='suggestion-btn'>Follow</button></div>
        </div>

      </div>



    </div>
  )
}

export default Suggestion