import React, { useEffect } from 'react';

const GoogleAdSenseTracking = () => {
  useEffect(() => {
    // Check if the AdSense script is already loaded
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
  }, []);

  return null; // This component doesn't render anything visually
};

export default GoogleAdSenseTracking;