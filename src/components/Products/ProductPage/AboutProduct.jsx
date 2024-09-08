import React from 'react'
import Button from '../../Button/Button'

const AboutProduct = ({productName}) => {
  return (
    <div className="p-6 border-b">
    <div className='text-3xl flex justify-center font-bold pb-8'>{productName}</div>
    <div>
        <Button text="RERA Approved" className="px-4"/>
        <div className='mt-2'>What is RERA?</div>
        <div>The Real Estate (Regulation and Development) Act, 2016 is an Act of the Parliament of India which seeks to protect home-buyers as well as help boost investments in the real estate industry</div>
        <div className='mt-4'>RERA ID:</div>
        <div># P50500000005</div>
    </div>
</div>
  )
}

export default AboutProduct
