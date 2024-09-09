
import React from 'react'
import apartment from '../../assets/images/delhi.jpg'
import "./styles.css"

const CitiesCard = ({text}) => {
  return (
    <div className="flex-1 p-4 service-image">
         <img  style={{
            aspectRatio:1
        }} src={apartment}/>
        <div className='flex justify-center font-medium mt-2'>{text}</div>
    </div>
  )
}

export default CitiesCard
