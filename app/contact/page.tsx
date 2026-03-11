import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact Us – SwimAmerica Kuwait' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader title="Contact Us" breadcrumb="Contact Us" />

      {/* Page Contact Us Start (matches original template structure) */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-image-form-box">
                {/* Left: Contact image + info */}
                <div className="contact-image-box">
                  <div className="contact-us-image">
                    <figure>
                      <Image
                        src="/images/contact-us-image.jpg"
                        alt="Contact SwimAmerica Kuwait"
                        width={540}
                        height={640}
                      />
                    </figure>
                </div>

                  <div className="contact-info-items-list wow fadeInUp">
                    <div className="contact-info-item">
                    <div className="icon-box">
                        <Image
                          src="/images/icon-phone-primary.svg"
                          alt="Phone"
                          width={32}
                          height={32}
                        />
                    </div>
                      <div className="contact-info-item-content">
                        <h2>Phone Number</h2>
                        <p>
                          <a href="tel:+96556641177">+965 5664 1177</a>
                        </p>
                    </div>
                  </div>

                    <div className="contact-info-item">
                    <div className="icon-box">
                        <Image
                          src="/images/icon-mail-primary.svg"
                          alt="Email"
                          width={32}
                          height={32}
                        />
                    </div>
                      <div className="contact-info-item-content">
                        <h2>Email Address</h2>
                        <p>
                          <a href="mailto:info@swimamericakw.com">
                            info@swimamericakw.com
                          </a>
                        </p>
                  </div>
                </div>
              </div>
            </div>

                {/* Right: Contact form */}
                <div className="contact-form">
                  <div className="section-title">
                    <h2
                      className="text-anime-style-3"
                      data-cursor="-opaque"
                    >
                      Contact Us Today
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Have questions about SwimAmerica Kuwait, levels, or
                      locations? Share your details and our team will help you
                      choose the right starting point for your swimmer.
                    </p>
                  </div>

                  {/* Form is progressively enhanced by /js/function.js */}
                  <form
                    id="contactForm"
                    action="/api/contact"
                    method="POST"
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                  <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <label>First Name *</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter First Name"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                          required
                        />
                    </div>

                      <div className="form-group col-md-6 mb-4">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <label>Subject</label>
                        <select
                          name="subject"
                          className="form-control"
                        >
                          <option value="">Select Subject</option>
                          <option value="membership">
                            Membership / Registration
                          </option>
                          <option value="programs">
                            Program or Level Information
                          </option>
                          <option value="locations">
                            Location &amp; Schedule
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <label>Message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows={5}
                          placeholder="Any additional details or questions..."
                          required
                        ></textarea>
                    </div>

                    <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn-default btn-highlighted"
                        >
                          Submit Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h4"
                          aria-live="polite"
                        ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Page Contact Us End */}

      {/* Google Map Start */}
      <div className="google-map">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Locations</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Start Your Swim Journey
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Get in touch with SwimAmerica Kuwait to learn more about our programs, class schedules, and
                  registration. Our team is here to answer your questions and help you choose the right level to begin
                  confidently.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.7305!2d48.0!3d29.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKuwait!5e0!3m2!1sen!2skw!4v1703158537552"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

       
       
        </div>
      </div>
      {/* Google Map End */}

      <Footer />
    </>
  );
}
