import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 import facebookPixelService, { FB_PIXEL_EVENTS } from '../../services/facebookPixelService'
 

const ThankYouPage = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    facebookPixelService.trackEvent(FB_PIXEL_EVENTS.LEAD_GENERATED);
  }, [])

  return (
    <div style={{
      fontStyle: "Garet, sans-serif"
    }}>
      <div class="inqure" style={{
        color: "#64506b",
        padding: "169px 0px"
      }}>
        {/* <span class="icon-close2 popcls" onClick={() => { setIsOpen(!isOpen) }}></span> */}
        <h3 className='text-center' style={{
          fontSize: "30px"
        }}>Thank You!</h3>
        <p style={{
          marginTop: "30px",
          marginBottom: "30px",
          fontSize: "16px",
          fontWeight: 600
        }} className='text-center'>
          We have successfully registered your details.<br></br>
          We will get in touch with you shortly.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <input type="submit" onClick={() => {
            navigate("/")
          }} name="" value="FOR MORE INFORMATION, KINDLY VISIT HERE" className='button text-center'

            style={{
              fontStyle: "'Garet', sans-serif;",
              fontSize: "13px"
            }}
          ></input>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
