import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'FAQs – GymPro' };

const faqs = [
  { id: 1, q: 'Q1. Do I need prior gym experience to join GymPro?', open: true },
  { id: 2, q: 'Q2. What facilities are included with the membership?' },
  { id: 3, q: 'Q3. Can I try the gym before taking a membership?' },
  { id: 4, q: 'Q4. Are there group workout programs available?' },
  { id: 5, q: 'Q5. Is nutrition guidance included in the plans?' },
  { id: 6, q: 'Q6. What are the gym operating hours?' },
  { id: 7, q: 'Q7. Can I pause or cancel my membership?' },
  { id: 8, q: 'Q8. Are personal training sessions available?' },
];

export default function FAQsPage() {
  return (
    <>
      <Header />
      <PageHeader title="FAQ's" breadcrumb="FAQ's" />

      <div className="our-faqs">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faqs-image-box wow fadeInUp">
                <div className="faqs-image">
                  <figure className="image-anime">
                    <Image src="/images/faqs-image.jpg" alt="FAQs" width={500} height={500} />
                  </figure>
                </div>
                <div className="faq-cta-box">
                  <div className="faqs-cta-content">
                    <h3>Hey, Any More Questions?</h3>
                    <p>Call Us: <a href="tel:123456789">+(123) 456-789</a></p>
                  </div>
                  <div className="faqs-cta-btn">
                    <Link href="/contact" className="btn-default btn-highlighted">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faqs-content">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Frequently Asked Questions</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Common questions about gym, and training</h2>
                </div>
                <div className="faq-accordion" id="accordion">
                  {faqs.map((faq, i) => (
                    <div key={i} className="accordion-item wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                      <h2 className="accordion-header" id={`heading${faq.id}`}>
                        <button
                          className={`accordion-button${faq.open ? '' : ' collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq.id}`}
                          aria-expanded={faq.open ? 'true' : 'false'}
                          aria-controls={`collapse${faq.id}`}
                        >
                          {faq.q}
                        </button>
                      </h2>
                      <div
                        id={`collapse${faq.id}`}
                        className={`accordion-collapse collapse${faq.open ? ' show' : ''}`}
                        role="region"
                        aria-labelledby={`heading${faq.id}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>GymPro is designed for all fitness levels. Our trainers guide beginners with proper techniques and structured workout plans to help them start safely and confidently.</p>
                          <ul>
                            <li>Every new member receives a personalized introduction to equipments</li>
                            <li>Workouts are designed to grow with you, ensuring beginners can start safely.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
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
