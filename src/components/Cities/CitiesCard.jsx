import React from 'react'
import delhi from '../../assets/images/delhi.jpg'

const CitiesCard = ({cityName}) => {
  return (
    <div className='flex-1 w-1/5 border p-4 flex flex-col justify-center'>
        <img  style={{
            aspectRatio:1
        }} src={delhi}/>
        <div className='flex justify-center font-medium mt-2'>{cityName}</div>
    </div>
  )
}

export default CitiesCard