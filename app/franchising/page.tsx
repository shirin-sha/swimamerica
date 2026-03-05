import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function FranchisingPage() {
  return (
    <>
      <Header />
      <PageHeader title="Franchising" breadcrumb="Franchising" />

      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Grow with GymPro
                </span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Partner with us through franchising
                </h2>
              </div>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Bring the GymPro experience to your community with a proven
                training model, strong brand, and ongoing operational support.
              </p>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                We&apos;ll work with you on location strategy, layout and
                equipment, coaching standards, and marketing so you can launch
                with confidence and focus on growing your member base.
              </p>
              <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                  <li>Proven training programs and brand assets</li>
                  <li>Guidance for gym setup and operations</li>
                  <li>Ongoing coaching and marketing support</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-us-content-box wow fadeInUp" data-wow-delay="0.4s">
                <h3>Interested in a franchise?</h3>
                <p>
                  Share your details and we&apos;ll contact you with our
                  franchising information pack.
                </p>
                <a href="/contact" className="btn-default btn-highlighted">
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

