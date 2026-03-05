import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="page-404 bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-404-content">
                <div className="section-title">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">404</h1>
                  <h2>Oops! Page Not Found</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                  </p>
                </div>
                <div className="page-404-image wow fadeInUp" data-wow-delay="0.4s">
                  <figure>
                    <Image src="/images/404-image.jpg" alt="404 Not Found" width={600} height={400} priority />
                  </figure>
                </div>
                <div className="page-404-btn wow fadeInUp" data-wow-delay="0.6s">
                  <Link href="/" className="btn-default btn-highlighted">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
