// import React from 'react'
// import apartment from '../../assets/images/delhi.jpg'

// const ServiceCard = ({text}) => {
//   return (
//     <div className="flex-1  border p-4">
//          <img  style={{
//             aspectRatio:1
//         }} src={apartment}/>
//         <div className='flex justify-center font-medium mt-2'>{text}</div>
//     </div>
//   )
// }

// export default ServiceCard


import React from 'react'
import "./styles.css"

const ServiceCard = ({text, src}) => {
  return (
    <div className="flex-1 p-4 service-image">
         <img  style={{
            aspectRatio:1
        }} src={src}/>
        <div className='flex justify-center font-medium mt-2'>{text}</div>
    </div>
  )
}

export default ServiceCard
