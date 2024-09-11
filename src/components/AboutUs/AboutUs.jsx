
import { Card } from 'flowbite-react'
import React from 'react'
import Service from '../OurServices/Service'

const AboutUs = () => {
  return (
    <div className='px-6'>
      <div>
        <h2 className="text-2xl font-bold  my-6">ABOUT US</h2>
        <div>
          Welcome to Apki Property, your trusted partner in finding the perfect property in India.
          With a deep understanding of the real estate market and a commitment to delivering exceptional service, we are here to guide you through every step of your property buying journey.
          Whether you are looking for your dream home, a lucrative investment, or a commercial space, we offer tailored solutions to meet your specific needs.
        </div>
        <div className='mt-3'>
          At Apki Property, we believe in connecting buyers with the best opportunities in the market.
          Our expert team is dedicated to helping you find properties that align with your goals, lifestyle, and budget.
          With access to a wide network of developers, agents, and exclusive listings, we ensure that you have the advantage when it comes to making informed decisions.
        </div>
      </div>
      <div className='mt-6'>
        <h2 className="text-2xl font-bold  mt-6">Why Choose Us?</h2>
        <ul className="list-disc ms-6 my-3" >
          <li className='mb-2'><span className='font-bold'>Tailored Solutions:</span> We understand that every buyer is unique, and so are their needs. That’s why we take the time to listen, analyze,
            and present options that match your vision. </li>
          <li className='mb-2'><span className='font-bold'>Expert Guidance:</span> Our experienced team of real estate professionals will walk you through the entire process, from property search to final purchase,
            ensuring you have a seamless and stress-free experience. </li>
          <li className='mb-2'><span className='font-bold'> Market Insight:</span>  With our finger on the pulse of the Indian real estate market, we provide you with the latest information and trends,
            helping you make informed decisions. </li>
          <li><span className='font-bold'> Transparent Transactions:</span>  We prioritise trust and transparency in every transaction, ensuring you have complete confidence in your property purchase. </li>
        </ul>
      </div>
      <div className='my-6'>
        Whether you're a first-time homebuyer, a seasoned investor, or looking for a commercial property,
        Apki Property is here to make your property buying journey smooth and successful.
        Let us help you turn your property dreams into reality!
      </div>

      <Service/>
    </div>
  )
}

export default AboutUs
