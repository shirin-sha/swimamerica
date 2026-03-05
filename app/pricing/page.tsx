import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Pricing – GymPro' };

export default function PricingPage() {
  return (
    <>
      <Header />
      <PageHeader title="Pricing Plans" breadcrumb="Pricing Plans" />

      <div className="our-pricing">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Pricing Plans</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Choose the right plan to unlock your fitness potential</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { name: 'Standard Membership', price: '$299.00', classes: '20', delay: '0.2s' },
              { name: 'Premium Membership', price: '$499.00', classes: '25', delay: '0.4s' },
            ].map((plan, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="pricing-item wow fadeInUp" data-wow-delay={plan.delay}>
                  <div className="pricing-item-header">
                    <div className="icon-box">
                      <Image src="/images/icon-pricing-item-1.svg" alt="" width={40} height={40} />
                    </div>
                    <div className="pricing-item-content">
                      <h2>{plan.name}</h2>
                      <p>Get access to our full range of gym facilities and classes.</p>
                    </div>
                    <div className="pricing-item-list">
                      <ul>
                        <li>Priority Support &amp; Premium Locker</li>
                        <li>High-energy group fitness classes</li>
                        <li>Motivating &amp; supportive environment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-body">
                    <div className="pricing-item-price-box">
                      <div className="pricing-item-price">
                        <h2>{plan.price} <sub>/Monthly</sub></h2>
                        <p>* Monthly {plan.classes} Classes</p>
                      </div>
                      <div className="pricing-item-btn">
                        <Link href="/contact" className="btn-default btn-highlighted">Join Now</Link>
                      </div>
                    </div>
                    <div className="pricing-item-body-content">
                      <p>Try Any Membership Free for 1 Week</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xl-4">
              <div className="pricing-cta-box wow fadeInUp" data-wow-delay="0.6s">
                <div className="pricing-cta-header">
                  <div className="pricing-cta-content">
                    <h2>Get Your Membership</h2>
                    <p>Our memberships give you access to all equipment, personalized training.</p>
                    <h3>Call Us At: <a href="tel:1234567890">+(123) 456-7980</a></h3>
                  </div>
                  <div className="pricing-cta-btn">
                    <Link href="/contact" className="btn-default btn-highlighted">Call Us Today!</Link>
                  </div>
                </div>
                <div className="pricing-cta-image">
                  <figure>
                    <Image src="/images/our-pricing-cta-image.png" alt="Pricing CTA" width={300} height={300} />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.8s">
                <ul>
                  <li><Image src="/images/icon-pricing-benefit-1.svg" alt="" width={20} height={20} />Get 30 day free trial</li>
                  <li><Image src="/images/icon-pricing-benefit-2.svg" alt="" width={20} height={20} />No any hidden fees pay</li>
                  <li><Image src="/images/icon-pricing-benefit-3.svg" alt="" width={20} height={20} />You can cancel anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
