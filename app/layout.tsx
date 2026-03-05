import type { Metadata } from 'next';
import Script from 'next/script';

// ── CSS imports (order matters) ───────────────────────────────────────────
import '../styles/bootstrap.min.css';
import '../styles/slicknav.min.css';
import '../styles/swiper-bundle.min.css';
import '../styles/all.min.css';
import '../styles/animate.css';
import '../styles/magnific-popup.css';
import '../styles/mousecursor.css';
import '../styles/fonts.css';
import '../styles/custom.css';

export const metadata: Metadata = {
  title: 'GymPro - Fitness and Gym',
  description:
    'GymPro offers structured training programs, expert coaching, and modern equipment to help you stay consistent, train safely, and achieve real fitness progress.',
  keywords: 'gym, fitness, training, workout, health',
  authors: [{ name: 'GymPro' }],
  icons: { icon: '/images/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* ── Scripts (load after page content) ── */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/circle-progress.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
