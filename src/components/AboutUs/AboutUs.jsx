
import React from 'react'
import AboutUsCard from './AboutUsCard'

const AboutUs = () => {
  return (
    <div className='p-6'>
      <div className='flex justify-center'>WHAT WE OFFER</div>
      <div className='text-3xl flex justify-center font-bold pb-8'>Featured Properties</div>

      <div class="grid gap-4 mx-8">
        <div class="flex justify-center gap-3">
          <AboutUsCard text="Residential Apartments"/>
          <AboutUsCard text="Residential Flats"/>
          <AboutUsCard text="Shop-Cum Offices"/>
          {/* <AboutUsCard text="Shop-Cum Offices"/> */}
        </div>
        <div class="flex justify-center gap-4">
          <AboutUsCard text="Shop-Cum Offices"/>
          <AboutUsCard text="Residential Plots"/>
          <AboutUsCard text="Residential Vilas"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
