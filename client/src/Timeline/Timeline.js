import React, { useState } from 'react'
import Posts from './Posts'
import Suggestion from './Suggestion'

import './Timeline.css'

function Timeline() {

  const[post,setPost]=useState([

    {
      username:'ismartsanjoy',
      image:"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes:'12',
      timeAt:'3'
    },
    {
      username:'sanju',
      image:"https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes:'34',
      timeAt:'4'
    },
    {
      username:'rahul',
      image:"https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes:'345',
      timeAt:'23'
    },
    {
      username:'ranjith',
      image:"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes:'23',
      timeAt:'6'
    },
    {
      username:'sakthi',
      image:"https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes:'122',
      timeAt:'5'
    },


  ]);


  return (


    <div className='main-timeline'>
      <div className='posts'>
        <div className='post-load'>
         { post.map((postinp)=>(
          <Posts 
          username={postinp.username} 
          image={postinp.image} 
          likes={postinp.likes} 
          timeAt={postinp.timeAt}
          />
        )
         
        )
       }


        </div>

       
            
      
      

      

      </div>








      <div className='suggestion'>
        <Suggestion/>
      </div>
    </div>
  )
}

export default Timeline