import React from 'react'
import Posts from './Posts'
import Suggestion from './Suggestion'

import './Timeline.css'

function Timeline() {
  return (
    <div className='main-timeline'>

      <div className='posts'>
        <Posts/>
      </div>

      <div className='suggestion'>
        <Suggestion/>
      </div>
    </div>
  )
}

export default Timeline