import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import facebookPixelService, { FB_PIXEL_EVENTS } from '../../services/facebookPixelService'
import googleAnalyticsService, { GA_EVENTS } from '../../services/googlePixelService'
import GoogleAdSenseTracking from '../../services/googlePixel'

const ThankYouPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    facebookPixelService.trackEvent(FB_PIXEL_EVENTS.LEAD_GENERATED)
    
    googleAnalyticsService.trackEvent(GA_EVENTS.LEAD_GENERATED, {
      method: 'website_form'
    })

    if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      // Create script element for AdSense
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      
      // Optional: Add your publisher ID
      const publisherTag = document.createElement('script');
      publisherTag.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-8542469335268336",
        enable_page_level_ads: true
      });`;
      
      // Append scripts to document
      document.head.appendChild(script);
      document.head.appendChild(publisherTag);
    }
  }, [])

  return (
    <div style={{ fontFamily: "Garet, sans-serif" }}>
      <Helmet>
        {/* <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8542469335268336"
          crossOrigin="anonymous"
        /> */}
        <meta name="google-adsense-account" content="ca-pub-8542469335268336" />
      </Helmet>
      <div className="inqure" style={{
        color: "#64506b",
        padding: "169px 0px"
      }}>
        <h3 className='text-center' style={{
          fontSize: "30px"
        }}>Thank You!</h3>
        <p style={{
          marginTop: "30px",
          marginBottom: "30px",
          fontSize: "16px",
          fontWeight: 600
        }} className='text-center'>
          We have successfully registered your details.<br />
          We will get in touch with you shortly.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <input 
            type="submit" 
            onClick={() => navigate("/")} 
            value="FOR MORE INFORMATION, KINDLY VISIT HERE" 
            className='button text-center'
            style={{
              fontFamily: "'Garet', sans-serif",
              fontSize: "13px"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage