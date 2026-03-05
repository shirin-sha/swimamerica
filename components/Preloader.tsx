'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const Preloader = () => {
  useEffect(() => {
    const hidePreloader = () => {
      const el = document.querySelector<HTMLElement>('.preloader');
      if (el) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        // Hide after fade without forcing DOM removal (avoids navigation errors)
        setTimeout(() => {
          el.style.display = 'none';
        }, 600);
      }
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
      return () => window.removeEventListener('load', hidePreloader);
    }
  }, []);

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image
            src="/images/loader.svg"
            alt="Loading..."
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
