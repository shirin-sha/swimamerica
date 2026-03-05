import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About Us – GymPro' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHeader title="About Us" breadcrumb="About Us" />

      {/* About Us Section */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-us-image-box wow fadeInUp">
                <div className="about-us-image-box-1">
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <Image src="/images/about-us-image-1.jpg" alt="About Us" width={600} height={400} />
                    </figure>
                  </div>
                  <div className="about-us-cta-box">
                    <div className="satisfy-client-images">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="satisfy-client-image">
                          <figure className="image-anime">
                            <Image src={`/images/author-${i}.jpg`} alt="" width={40} height={40} />
                          </figure>
                        </div>
                      ))}
                    </div>
                    <div className="google-rating-box">
                      <div className="google-rating-logo">
                        <Image src="/images/icon-google.svg" alt="Google" width={30} height={30} />
                      </div>
                      <div className="google-rating-info">
                        <div className="google-rating-header">
                          <h2><span className="counter">4.9</span>/5</h2>
                          <span className="google-rating-star">
                            {[1,2,3,4,5].map(s => <i key={s} className="fa fa-solid fa-star"></i>)}
                          </span>
                        </div>
                        <div className="google-rating-review-content"><p>Based on 250 review</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-image-box-2">
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <Image src="/images/about-us-image-2.jpg" alt="About Us 2" width={400} height={300} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-us-content-box">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">About Our Gym</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">A supportive fitness built for every body</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">GymPro is more than a gym it&apos;s a community that supports every fitness journey. From beginners to advanced athletes, we provide structured training.</p>
                </div>
                <div className="about-us-item-list wow fadeInUp" data-wow-delay="0.4s">
                  {[
                    { icon: 1, title: 'Modern Facilities', desc: 'We offer a clean, well equipped training space with modern' },
                    { icon: 2, title: 'Supportive Coaches', desc: 'Train with experienced who guide, motivate.' },
                  ].map((item, i) => (
                    <div key={i} className="about-us-item">
                      <div className="icon-box">
                        <Image src={`/images/icon-about-us-item-${item.icon}.svg`} alt="" width={40} height={40} />
                      </div>
                      <div className="about-us-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
                  <div className="about-us-body-list">
                    <ul>
                      <li>Our certified trainers provide support</li>
                      <li>Clean space. Complete equipment.</li>
                      <li>Premium equipment in a clean space</li>
                    </ul>
                  </div>
                  <div className="contact-us-circle">
                    <Link href="/contact">
                      <Image src="/images/contact-us-circle.svg" alt="Contact" width={120} height={120} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="our-approach bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title">Our Approach</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Where science based training meets real world results</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="our-approach-image">
                <figure className="image-anime reveal">
                  <Image src="/images/our-approach-image.jpg" alt="Our Approach" width={600} height={500} />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-approach-list">
                {[
                  { icon: 1, title: 'Our Mission', desc: 'Our mission is to motivate, guide & support every member on their fitness journey through structured workouts.', delay: '' },
                  { icon: 2, title: 'Our Vision', desc: 'Our vision is to become a trusted fitness destination that transforms lives through smart training, expert coaching.', delay: '0.2s' },
                  { icon: 3, title: 'Our Value', desc: 'Our values center on smart training, expert support, and a community driven approach to lasting fitness success.', delay: '0.4s' },
                ].map((item, i) => (
                  <div key={i} className="our-approach-item wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="icon-box">
                      <Image src={`/images/icon-our-approach-${item.icon}.svg`} alt="" width={40} height={40} />
                    </div>
                    <div className="our-approach-item-content">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image src="/images/author-6.jpg" alt="" width={40} height={40} />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <Image src="/images/icon-phone-primary.svg" alt="" width={20} height={20} />
                  </div>
                </div>
                <p>Let&apos;s make something great work together. <Link href="/contact">Get Free Quote</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Trainers Section */}
      <div className="our-trainers">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-xl-6">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Our Trainers</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Coaches supporting your fitness goals &amp; lifestyle</h2>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Our supportive and knowledgeable trainers work closely with members to provide encouragement, proper techniques, and ongoing motivation.</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/trainers" className="btn-default">View All Trainers</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { img: 1, name: 'Albert Flores', specialty: 'Strength & Conditioning', delay: '0.2s' },
              { img: 2, name: 'Jenny Wilson', specialty: 'Yoga & Mobility', delay: '0.4s' },
              { img: 4, name: 'Savannah Nguyen', specialty: 'Cardio & Weight Loss', delay: '0.6s' },
            ].map((trainer, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="trainer-item wow fadeInUp" data-wow-delay={trainer.delay}>
                  <div className="trainer-item-image">
                    <Link href="/trainers/trainer-details" data-cursor-text="View">
                      <figure>
                        <Image src={`/images/trainer-${trainer.img}.jpg`} alt={trainer.name} width={400} height={450} />
                      </figure>
                    </Link>
                  </div>
                  <div className="trainer-social-list">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                  <div className="trainer-item-content">
                    <ul><li>{trainer.specialty}</li></ul>
                    <h2><Link href="/trainers/trainer-details">{trainer.name}</Link></h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
