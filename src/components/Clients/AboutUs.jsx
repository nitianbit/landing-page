import React from 'react'
import Button from '../Button/Button'

const AboutUs = () => {
  return (
    <div className='mx-6'>
      <h2 className='text-xl font-bold  mt-6 mb-3'>
        Why Choose Us?
      </h2>
      <div>
        We understand the intricacies of the Indian property landscape, and our proven approach delivers measurable results.
        You’ll notice an immediate increase in sales inquiries, property viewings, and most importantly “Closed Deals”.
        Whether you're a developer, real estate agent, or consultant, our lead generation services will give your business the edge it needs in today's competitive environment.
      </div>
      <h2 className='text-xl font-bold  mt-6 mb-3'>
        Take the First Step Today
      </h2>
      <div>
        Are you ready to fill your sales pipeline with high-quality leads?
        Try our service now and experience the difference for yourself. With our expert assistance, you’ll watch your property sales soar to new heights.
      </div>
      <div className='my-6'>
        Don’t let your competitors outpace you—partner with us today, and start closing more deals!
      </div>
      <div className='font-bold'>
        Contact us now to supercharge your real estate business.</div>
         <Button className="px-4 my-6 font-rasputin" text="Schedule a Call" onClick={()=>{
          navigate("/contat-us")
        }}/>
    </div>

  )
}

export default AboutUs
