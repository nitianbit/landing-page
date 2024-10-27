import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = '1072641991236564';

export const FB_PIXEL_EVENTS={
    LEAD_GENERATED:'GenerateLead'
}

class FacebookPixelService  {
  init= (options = { autoConfig: true, debug: false }) => {
    ReactPixel.init(PIXEL_ID, {}, options);
    ReactPixel.pageView(); 
  }

  trackPageView= () => {
    ReactPixel.pageView();
  }

  trackEvent= (event, data = {}) => {
    ReactPixel.track(event, data);
    console.log("generated")
  }

  trackCustomEvent= (event, data = {}) => {
    ReactPixel.trackCustom(event, data);
  }
};

const facebookPixelService = new FacebookPixelService();
export default facebookPixelService;
