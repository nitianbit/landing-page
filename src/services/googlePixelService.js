import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'ca-pub-8542469335268336'; // Replace with your actual Google Analytics 4 Measurement ID

export const GA_EVENTS = {
  LEAD_GENERATED: 'generate_lead',
  PAGE_VIEW: 'page_view'
};

class GoogleAnalyticsService {
  init = (options = { debug: false }) => {
    ReactGA.initialize(GA_TRACKING_ID, {
      debug: options.debug,
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
    this.trackPageView();
  }

  trackPageView = (path) => {
    ReactGA.send({
      hitType: 'pageview',
      page: path || window.location.pathname
    });
  }

  trackEvent = (event, params= {}) => {
    ReactGA.event(event, params);
    console.log(`GA Event tracked: ${event}`, params);
  }
}

const googleAnalyticsService = new GoogleAnalyticsService();
export default googleAnalyticsService;