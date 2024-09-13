import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import residentialApartments from '../../assets/home/featured/Residential-Apartments.png'
import residentialVillas from '../../assets/home/featured/Residential-Villas.png'
import residentialFlats from '../../assets/home/featured/Residential-Flats.png'
import residentialPlots from '../../assets/home/featured/Residential-Plots.png'
import residentialBuilderFloors from '../../assets/home/featured/Residential-Builder-Floors.png'
import commercialOffices from '../../assets/home/featured/Commercial-Offices.png'
import residentialDuplex from '../../assets/home/featured/Residential-Duplex.png'
import commercialShops from '../../assets/home/featured/Commercial-Shops.png'
import "./styles.css"

const Service = () => {
  const [data, setData] = useState([
    { title: 'Residential Apartments', src: residentialApartments },
    { title: 'Residential Vilas', src: residentialVillas },
    { title: 'Residential Flats', src: residentialFlats },
    { title: 'Residential Plots', src: residentialPlots },
    { title: 'Residential Builder Floors', src: residentialBuilderFloors },
    { title: 'Commercial Offices', src: commercialOffices },
    { title: 'Residential Duplex', src: residentialDuplex },
    { title: 'Commercial Shops', src: commercialShops },

    // { title: 'Residential Apartments', src: apartment },
    // { title: 'Residential Flats', src: apartment },
    // { title: 'Residential Builder Floors', src: apartment },
    // { title: 'Residential Duplex', src: apartment },
    // { title: 'Residential Vilas', src: apartment },
    // { title: 'Residential Plots', src: apartment },
    // { title: 'Residential Offices', src: apartment },
    // { title: 'Residential Shops', src: apartment },

    // { title: 'Residential Apartments', src: apartment },
    // { title: 'Residential Flats', src: apartment },
    // { title: 'Residential Builder Floors', src: apartment },
    // { title: 'Residential Duplex', src: apartment },
    // { title: 'Residential Vilas', src: apartment },
    // { title: 'Residential Plots', src: apartment },
    // { title: 'Residential Offices', src: apartment },
    // { title: 'Residential Shops', src: apartment },
  ]);

  return (
    <div className='py-6'>
    <div className='flex justify-center'>WHAT WE OFFER</div>
    <div className='text-3xl flex justify-center font-bold pb-8'>Featured Properties</div>
    
    <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          <div className='flex flex-col'>

            <div className="flex flex-row space-x-4 gap-4 mb-5">
              {data.map((item, index) => (
                index % 2 === 0 && (
                  <ServiceCard text={item.title} key={index} src={item?.src}/>
                )
              ))}
            </div>
            <div className="flex flex-row space-x-4 gap-4 mb-5">
              {data.map((item, index) => (
                index % 2 !== 0 && (
                  <ServiceCard text={item.title} key={index} src={item?.src}/>
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
