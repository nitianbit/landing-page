/* eslint-disable import/no-anonymous-default-export */
let initialized = false;
let debug = false;

/**
 * Utilities
 */

const verifyInit = () => {
  if (!initialized) {
    console.warn(
      "Google Ads Pixel not initialized before using call ReactGoogleAdsPixel.init with required params"
    );
  }
  return initialized;
};

const log = (...args) => {
  console.info(...["[react-google-ads-pixel]"].concat(args));
};

const defaultOptions = {
  debug: false,
};

export default {
  init(conversionId, options = defaultOptions) {
    if (!conversionId) {
      console.warn("Please insert conversion ID for initializing");
      return;
    }

    // Load Google Ads script
    !(function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}`;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', conversionId);

    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', conversionId); // Initialize the pixel

    console.log("Google Ads Pixel loaded");
    initialized = true;
    debug = options.debug;
  },

  track(event, data = {}) {
    if (!verifyInit()) {
      return;
    }

    window.gtag('event', event, data); // Track custom event
    console.log(`called gtag('event', '${event}');`);

    if (debug) {
      log(`called gtag('event', '${event}');`, data);
    }
  },

  qp(...args) {
    if (!verifyInit()) {
      return;
    }

    window.gtag(...args); // Pass through to gtag

    if (debug) {
      log(`called gtag('${args[0]}', '${args[1]}')`);

      if (args[2]) {
        log("with data", args[2]);
      }
    }
  },
};
