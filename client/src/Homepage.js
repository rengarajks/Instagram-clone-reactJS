import React from 'react'

import './Homepage.css'
import Timeline from './Timeline/Timeline'
import Sidenav from './navigation/Sidenav.js'


function Homepage() {
  return (

    <div className='homepage'>

        <div className='nav'>
            <Sidenav/>
            </div> 


        <div className='timeline'>
            <Timeline/>
        </div>
        
    </div>
  )
}

export default Homepage