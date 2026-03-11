import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Footer Header */}
            <div className="footer-header">
              <div className="footer-logo">
                <Image src="/images/footerlogo.png" alt="GymPro Logo" width={220} height={70} />
              </div>
              <div className="section-title">
                <h2 data-cursor="-opaque">
                  Empowering Safe Swimming with Expert Coaching and Lasting Confidence
                </h2>
              </div>
            </div>
          </div>

          {/* About Footer */}
          <div className="col-xl-4">
            <div className="about-footer">
              <div className="about-footer-content">
                <h2>Our Locations</h2>
                <p>
                  Two indoor pool locations in Kuwait with structured lessons, supportive coaches, and safe supervised
                  training for every swimmer.
                </p>
              </div>
              <div className="about-footer-item">
              
                <div className="about-footer-item-content">
                  <p>
                    Sharq: Dasman Bilingual School, Gate 3
                    <br />     <br />
                    Salwa: Danah Universal School of Kuwait, <br/>Salwa Block 1, Street 100, Gate 3
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-xl-8">
            <div className="footer-links-box">
              {/* Quick Links */}
              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/programs">Programs</Link></li>
                  <li><Link href="/trainers">Coaches</Link></li>
                  <li><Link href="/faqs">FAQ</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Programs */}
              <div className="footer-links">
                <h2>Programs</h2>
                <ul>
                  <li><Link href="/programs">Learn to Swim Program</Link></li>
                  <li><Link href="/programs">Water Babies</Link></li>
                  <li><Link href="/programs">Junior Development</Link></li>
                  <li><Link href="/programs">Junior Competitive</Link></li>
                  <li><Link href="/programs">Adult Learn to Swim</Link></li>
                  <li><Link href="/programs">Private and Home Classes</Link></li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div className="footer-links footer-working-hour-box">
                <div className="footer-contact-content">
                  <h2>Contact and Support</h2>
                  <ul>
                    <li>Phone: <a href="tel:+96556641177">+965 5664 1177</a></li>
                    <li>Daily: 9:00 AM to 9:00 PM</li>
                  </ul>
                </div>

                <div className="footer-social-links">
                
                  <ul>
              
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-lg-12">
            <div className="footer-copyright-text">
              <p>Copyright © 2026 SwimAmerica Kuwait. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
