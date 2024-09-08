import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <div className='p-6'>
    <div className='flex justify-center'>WHAT WE OFFER</div>
    <div className='text-3xl flex justify-center font-bold pb-8'>Featured Properties</div>

    <div class="grid gap-4 mx-8">
      <div class="flex justify-center gap-3">
        <ServiceCard text="Residential Apartments"/>
        <ServiceCard text="Residential Flats"/>
        <ServiceCard text="Residential Builder Floors"/>
        <ServiceCard text="Residential Duplex"/>
        {/* <ServiceCard text="Shop-Cum Offices"/> */}
      </div>
      <div class="flex justify-center gap-4">
        <ServiceCard text="Residential Vilas"/>
        <ServiceCard text="Residential Plots"/>
        <ServiceCard text="Commercial Offices"/>
        <ServiceCard text="Commercial Shops"/>
      </div>
    </div>
  </div>
  )
}

export default Service
