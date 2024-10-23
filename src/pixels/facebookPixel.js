/* eslint-disable import/no-anonymous-default-export */
let initialized = false;
let debug = false;

/**
 * Utilities
 */

const verifyInit = () => {
  if (!initialized) {
    console.warn(
      "Facebook Pixel not initialized before using call ReactFacebookPixel.init with required params"
    );
  }
  return initialized;
};

const log = (...args) => {
  console.info(...["[react-facebook-pixel]"].concat(args));
};

const defaultOptions = {
  debug: false,
};

export default {
  init(pixelId, options = defaultOptions) {
    if (!pixelId) {
      console.warn("Please insert pixel id for initializing");
      return;
    }

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', pixelId); // Initialize the pixel
    fbq('track', 'PageView'); // Track the PageView event

    console.log("Facebook Pixel loaded");
    initialized = true;
    debug = options.debug;
  },

  track(event, data = {}) {
    if (!verifyInit()) {
      return;
    }

    fbq('track', event, data); // Track custom event
    console.log(`called fbq('track', '${event}');`);

    if (debug) {
      log(`called fbq('track', '${event}');`, data);
    }
  },

  qp(...args) {
    if (!verifyInit()) {
      return;
    }

    fbq(...args); // Pass through to fbq

    if (debug) {
      log(`called fbq('${args.slice(0, 2).join("', '")}')`);

      if (args[2]) {
        log("with data", args[2]);
      }
    }
  },
};
