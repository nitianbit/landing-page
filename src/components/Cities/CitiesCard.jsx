
import React from 'react'
import "./styles.css"

const CitiesCard = ({text, src}) => {
  return (
    <div className="flex-1 p-4 service-image">
         <img  style={{
            aspectRatio:1
        }} src={src}/>
        <div className='flex justify-center font-medium mt-2'>{text}</div>
    </div>
  )
}

export default CitiesCard
