import React, { useState } from 'react'
import CitiesCard from './CitiesCard'
import apartment from '../../assets/images/delhi.jpg'
import "./styles.css"

const Service = () => {
  const [data, setData] = useState([
    { title: 'Residential Apartments', src: apartment },
    { title: 'Residential Flats', src: apartment },
    { title: 'Residential Builder Floors', src: apartment },
    { title: 'Residential Duplex', src: apartment },
    { title: 'Residential Vilas', src: apartment },
    { title: 'Residential Plots', src: apartment },
    { title: 'Residential Offices', src: apartment },
    { title: 'Residential Shops', src: apartment },

    { title: 'Residential Apartments', src: apartment },
    { title: 'Residential Flats', src: apartment },
    { title: 'Residential Builder Floors', src: apartment },
    { title: 'Residential Duplex', src: apartment },
    { title: 'Residential Vilas', src: apartment },
    { title: 'Residential Plots', src: apartment },
    { title: 'Residential Offices', src: apartment },
    { title: 'Residential Shops', src: apartment }, 
  ]);

  return (
    <div className='p-6'>
     <div className='text-3xl flex justify-center font-bold pb-8'>Popular Cities</div>
    
    <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          <div className='flex flex-col'>

            <div className="flex flex-row space-x-4 gap-4 mb-5">
              {data.map((item, index) => (
                index % 2 === 0 && (
                  <CitiesCard text={item.title} key={index} />
                )
              ))}
            </div>
            <div className="flex flex-row space-x-4 gap-4 mb-5">
              {data.map((item, index) => (
                index % 2 !== 0 && (
                  <CitiesCard text={item.title} key={index} />
                )
              ))}
            </div>
          </div>
        </div>
      </div>

       
 
     

  </div>
  )
}

export default Service
