import React from 'react'
import Nav from './Navigation/Nav.js'

import './Homepage.css'
import Timeline from './Timeline/Timeline'
function Homepage() {
  return (
    <div className='homepage'>

        <div className='nav'>
            <Nav/>
            </div> 


        <div className='timeline'>
            <Timeline/>
        </div>



    </div>
  )
}

export default Homepage