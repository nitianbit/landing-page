
import React from 'react'
import apartment from '../../assets/images/delhi.jpg'

const AboutUsCard = ({text}) => {
  return (
    <div class="flex-1  border p-4">
         <img  style={{
            aspectRatio:1
        }} src={apartment}/>
        <div className='flex justify-center font-medium mt-2'>{text}</div>
    </div>
  )
}

export default AboutUsCard
