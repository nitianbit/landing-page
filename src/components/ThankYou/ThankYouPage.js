import React, { useState } from 'react'

const ThankYouPage = ({isOpen, setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
    <div class="inqure">
        {/* <span class="icon-close2 popcls" onClick={() => { setIsOpen(!isOpen) }}></span> */}
        <h3 className='text-center'>Thank You!</h3>
        <p className='text-center'>
            We have successfully registered your details.<br></br>
            We will get in touch with you shortly.
        </p>
    </div>
</div>
  )
}

export default ThankYouPage