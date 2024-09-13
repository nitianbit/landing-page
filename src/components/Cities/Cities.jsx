import React, { useState } from 'react'
import CitiesCard from './CitiesCard'
import delhi from '../..//assets/home/citites/Delhi.png'
import mumbai from '../..//assets/home/citites/Mumbai.png'
import gurgaon from '../..//assets/home/citites/Gurgaon.png'
import pune from '../..//assets/home/citites/Pune.png'
import faridabad from '../..//assets/home/citites/Faridabad.png'
import bengaluru from '../..//assets/home/citites/Bengaluru.png'
import noida from '../..//assets/home/citites/Noida.png'
import hyderabad from '../..//assets/home/citites/Hyderabad.png'
import chennai from '../..//assets/home/citites/Chennai.png'
import kolkata from '../..//assets/home/citites/Kolkata.png'
import "./styles.css"

const Service = () => {
  const [data, setData] = useState([
    { title: 'Delhi', src: delhi },
    { title: 'Mumbai', src: mumbai },
    { title: 'Gurgaon', src: gurgaon },
    { title: 'Pune', src: pune },
    { title: 'Faridabad', src: faridabad },
    { title: 'Bengaluru', src: bengaluru },
    { title: 'Noida', src: noida },
    { title: 'Chennai', src: chennai },
    { title: 'Hyderabad', src: hyderabad },
    { title: 'Kolkata', src: kolkata },
  ]);

  return (
    <div className='py-6'>
     <div className='text-3xl flex justify-center font-bold pb-8'>Popular Cities</div>
    
    <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          <div className='flex flex-col'>

            <div className="flex flex-row space-x-4 gap-4 mb-5">
              {data.map((item, index) => (
                index % 2 === 0 && (
                  <CitiesCard text={item.title} key={index} src={item?.src}/>
                )
              ))}
            </div>
            <div className="flex flex-row space-x-4 gap-4 mb-5">
              {data.map((item, index) => (
                index % 2 !== 0 && (
                  <CitiesCard text={item.title} key={index} src={item?.src}/>
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
