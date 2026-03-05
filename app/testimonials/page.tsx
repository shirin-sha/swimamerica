import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Testimonials – GymPro' };

const testimonials = [
  { author: 'Courtney Henry', img: 1, membership: 'Premium Membership' },
  { author: 'Ralph Edwards', img: 2, membership: 'Standard Membership' },
  { author: 'Leslie Alexander', img: 3, membership: 'Premium Membership' },
  { author: 'Guy Hawkins', img: 4, membership: 'Standard Membership' },
  { author: 'Bessie Cooper', img: 5, membership: 'Premium Membership' },
  { author: 'Savannah Nguyen', img: 6, membership: 'Standard Membership' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <PageHeader title="Testimonials" breadcrumb="Testimonials" />

      <div className="our-testimonials">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Testimonials</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Trusted by members who train &amp; grow</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {testimonials.map((t, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="testimonial-item wow fadeInUp" data-wow-delay={`${i * 0.2}s`}>
                  <div className="testimonial-item-header">
                    <div className="testimonial-item-rating">
                      {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
                    </div>
                    <div className="testimonial-item-quote">
                      <Image src="/images/testimonial-quote.svg" alt="Quote" width={40} height={40} />
                    </div>
                  </div>
                  <div className="testimonial-item-body">
                    <div className="testimonial-item-content">
                      <p>&ldquo; GymPro stands out because of its professional approach to fitness. The personal training sessions are well-planned, goal-oriented, and challenging in the right way. &rdquo;</p>
                    </div>
                    <div className="testimonial-item-author">
                      <div className="testimonial-author-image">
                        <figure className="image-anime">
                          <Image src={`/images/author-${t.img}.jpg`} alt={t.author} width={60} height={60} />
                        </figure>
                      </div>
                      <div className="testimonial-author-content">
                        <h2>{t.author}</h2>
                        <p>{t.membership}</p>
                      </div>
                    </div>
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
