import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <div className="hero dark-section parallaxie">
        <div className="hero-bg-video">
          <video autoPlay muted loop playsInline id="myvideo">
            <source src="/images/heromov.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-8">
              <div className="hero-content-box">
                <div className="hero-sub-heading wow fadeInUp">
                  <div className="satisfy-client-images">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="satisfy-client-image">
                        <figure className="image-anime">
                          <Image src={`/images/author-${i}.jpg`} alt={`Author ${i}`} width={28} height={28} />
                        </figure>
                      </div>
                    ))}
                  </div>
                  <div className="satisfy-client-content">
                    <p>Safe Swimming. Real Progress.</p>
                  </div>
                </div>
                <div className="section-title">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    A Modern Swim School Built to Support Your Child&apos;s Swim Journey
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    SwimAmerica delivers structured lessons, station based teaching, and expert
                    coaching to build water safety, confidence, and strong stroke technique from
                    day one.
                  </p>
                </div>
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="#" className="btn-default btn-highlighted">Get Started Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="hero-counter-box wow fadeInUp">
                <h2><span className="counter">8000</span>+</h2>
                <h3>Successful Graduates</h3>
                <p>
                  Established since 2013, in a fun, protected environment where every swimmer
                  progresses individually through clear stations designed by ASCA professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT US SECTION ===== */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-us-image-box wow fadeInUp">
                <div className="about-us-image-box-1">
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <Image src="/images/about-us-image-1.jpg" alt="About Us" width={480} height={560} />
                    </figure>
                  </div>
                  <div className="about-us-cta-box">
                    <div className="satisfy-client-images">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="satisfy-client-image">
                          <figure className="image-anime">
                            <Image src={`/images/author-${i}.jpg`} alt={`Author ${i}`} width={40} height={40} />
                          </figure>
                        </div>
                      ))}
                    </div>
                    <div className="google-rating-box">
                      <div className="google-rating-info">
                        <div className="google-rating-header">
                          <h2>
                            <span className="counter">8000</span>+
                          </h2>
                        </div>
                        <div className="google-rating-review-content">
                          <p>Graduates Since 2013</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-image-box-2">
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <Image src="/images/about-us-image-2.jpg" alt="About Us 2" width={314} height={443} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-us-content-box">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">About SwimAmerica</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    A supportive swim program built for every swimmer
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    SwimAmerica Kuwait is more than lessons. It is a structured learn to swim
                    program,
                    helping swimmers grow in safety, confidence, and technique.
                  </p>
                </div>
                <div className="about-us-item-list wow fadeInUp" data-wow-delay="0.4s">
                  <div className="about-us-item">
                    <div className="icon-box">
                      <Image src="/images/icon-about-us-item-1.svg" alt="Structured Stations" width={40} height={40} />
                    </div>
                    <div className="about-us-item-content">
                      <h3>Structured Stations</h3>
                      <p>
                        Clear station, so progress
                        stays visible every class.
                      </p>
                    </div>
                  </div>
                  <div className="about-us-item">
                    <div className="icon-box">
                      <Image src="/images/icon-about-us-item-2.svg" alt="Certified Coaches" width={40} height={40} />
                    </div>
                    <div className="about-us-item-content">
                      <h3>Certified Coaches</h3>
                      <p>
                        Multinational instructors certified by ASCA.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
                  <div className="about-us-body-list">
                    <ul>
                      <li>6 kids per instructor, focused coaching</li>
                      <li>50 minute class duration, consistent learning</li>
                      <li>Indoor pool, heated 30 to 32°C in winter</li>
                    </ul>
                  </div>
                  <div className="contact-us-circle">
                    <Link href="#">
                      <Image src="/images/contact-us-circle.svg" alt="Contact Us" width={120} height={120} />
                    </Link>
                  </div>
                </div>
                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="#" className="btn-default">More About Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR PROGRAMS SECTION ===== */}
      <div className="our-programs bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Programs &amp; Training</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Swimming programs built to build confidence and deliver progress
                </h2>
              </div>
            </div>
          </div>
          <div className="row program-item-list">
            {[
              {
                img: 'learn',
                icon: 1,
                no: '01.',
                title: 'Learn to Swim Program',
                desc: 'Structured station based lessons that build water safety, confidence, and core stroke foundations step by step.',
              },
              {
                img: 2,
                icon: 2,
                no: '02.',
                title: 'Water Babies Class',
                desc: 'A playful parent guided class using songs and simple skills to help little ones feel safe in water.',
              },
              {
                img: 3,
                icon: 3,
                no: '03.',
                title: 'Junior Development Program',
                desc: 'For graduates ready to refine technique and build stronger endurance across all four competitive strokes.',
              },
              {
                img: 4,
                icon: 4,
                no: '04.',
                title: 'Adult Learn to Swim',
                desc: 'Private supportive coaching to overcome fear, improve technique, and enjoy a safe low impact fitness skill.',
              },
              {
                img: 5,
                icon: 5,
                no: '05.',
                title: 'Private & Home Classes',
                desc: 'Personalized sessions designed to accelerate progress with focused coaching and flexible scheduling.',
                active: true,
              },
              {
                img: 6,
                icon: 6,
                no: '06.',
                title: 'Junior Competitive Program',
                desc: 'Advanced training for swimmers who can swim all strokes and want stronger speed, drills, and goals.',
              },
            ].map((program, idx) => (
              <div key={idx} className="col-xl-4 col-md-6">
                <div className={`program-item${program.active ? ' active' : ''} wow fadeInUp`} data-wow-delay={`${idx * 0.2}s`}>
                  <div className="program-item-image">
                    <figure>
                      <Image src={`/images/${program.img}.jpg`} alt={program.title} width={400} height={300} />
                    </figure>
                  </div>
                  <div className="program-item-body">
                    <div className="program-item-header">
                      <div className="icon-box">
                        <Image src={`/images/icon-program-item-${program.icon}.svg`} alt="" width={40} height={40} />
                      </div>
                      <div className="program-item-no"><span>{program.no}</span></div>
                    </div>
                    <div className="program-item-body-content">
                      <div className="program-item-content">
                        <h2><Link href="#">{program.title}</Link></h2>
                        <p>{program.desc}</p>
                      </div>
                      <div className="program-item-btn">
                        <Link href="#" className="readmore-btn">View Program</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-footer-text text-center wow fadeInUp" data-wow-delay="0.8s">
                <Link href="#" className="btn-default btn-highlighted">
                  View All Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Why Choose Us</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    More than a swim school 
                    <br/>
                    a complete experience
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    SwimAmerica Kuwait delivers more than pool time. We provide structured
                    station based training, expert coaching, and a safe supervised environment that
                    helps swimmers progress with confidence at every stage of their journey.
                  </p>
                </div>
                <div className="why-choose-us-item-list wow fadeInUp" data-wow-delay="0.4s">
                  <div className="why-choose-us-item">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-us-item-1.svg" alt="" width={40} height={40} />
                    </div>
                    <div className="why-choose-us-item-content">
                      <h3>Certified Coaches &amp; Expert Guidance</h3>
                    </div>
                  </div>
                  <div className="why-choose-us-item">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-us-item-2.svg" alt="" width={40} height={40} />
                    </div>
                    <div className="why-choose-us-item-content">
                      <h3>Supportive &amp; Safe Training Environment</h3>
                    </div>
                  </div>
                </div>
                <div className="why-choose-us-list wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li> Coaches guide every swimmer with clear station goals and daily support.</li>
                    <li>Small groups with a 6:1 ratio help learn comfortably and safely.</li>
                  </ul>
                </div>
                <div className="why-choose-us-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="#" className="btn-default">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-us-image-box wow fadeInUp">
                <div className="why-choose-us-image">
                  <figure>
                    <Image src="/images/why-choose-us-image.jpg" alt="Why Choose Us" width={600} height={500} />
                  </figure>
                </div>
                <div className="why-choose-cta-box">
                  <div className="satisfy-client-images">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="satisfy-client-image">
                        <figure className="image-anime">
                          <Image src={`/images/author-${i}.jpg`} alt="" width={40} height={40} />
                        </figure>
                      </div>
                    ))}
                  </div>
                  <div className="satisfy-client-content">
                    <p>Trusted by 8,000+ Swimmers</p>
                    <span>Since 2013 in Kuwait</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image src="/images/author-6.jpg" alt="" width={30} height={30} />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <Image src="/images/icon-phone-primary.svg" alt="" width={20} height={20} />
                  </div>
                </div>
                <p>Let&apos;s create confident swimmers together. <Link href="#">Get Started Now</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== INTRO VIDEO SECTION ===== */}
      <div className="intro-video bg-section dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-video-content">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Watch Our Video</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    See how we teach, guide, and build confident swimmers
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    A quick look at our station based training and safe indoor pool environment.
                  </p>
                </div>
                <div className="watch-video-circle wow fadeInUp">
                  <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                    <Image src="/images/watch-video-circle.png" alt="Watch Video" width={130} height={130} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR FEATURES SECTION ===== */}
      <div className="our-features">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-xl-6">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Our Features</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Modern swim features built for safe progress
                </h2>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>
                    Modern, structured swim training designed to improve water safety, confidence, and stroke technique
                    through guided stations and expert supervision.
                  </p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link className="btn-default" href="#">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="our-features-boxes">
                {/* Feature CTA Box */}
                <div className="our-features-box feature-cta-box wow fadeInUp">
                  <div className="feature-cta-image">
                    <figure>
                      <Image src="/images/our-features-cta-image.jpg" alt="Group Training" width={400} height={300} />
                    </figure>
                  </div>
                  <div className="feature-cta-item">
                    <div className="feature-cta-item-list">
                      <ul>
                        <li>Water Safety</li>
                        <li>Structured Stations</li>
                        <li>Supportive Coaching</li>
                      </ul>
                    </div>
                    <div className="feature-cta-item-body">
                      <div className="satisfy-client-images">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="satisfy-client-image">
                            <figure className="image-anime">
                              <Image src={`/images/author-${i}.jpg`} alt="" width={40} height={40} />
                            </figure>
                          </div>
                        ))}
                      </div>
                      <div className="feature-cta-item-content">
                        <h3>Group Training Sessions</h3>
                        <p>
                          Stay motivated with small group lessons that build confidence and technique.
                        </p>
                      </div>
                      <div className="feature-cta-item-btn">
                        <Link href="#" className="btn-default btn-highlighted">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Location Box */}
                <div className="our-features-box">
                  <div className="our-features-image wow fadeInUp" data-wow-delay="0.2s">
                    <figure>
                      <Image src="/images/our-features-image.jpg" alt="Our Features" width={400} height={300} />
                    </figure>
                  </div>
                  <div className="our-features-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="feature-item-content">
                      <h3>Our Locations</h3>
                      <p>
                        Two indoor pool locations in Kuwait, designed for consistent learning with trained coaches,
                        supervision, and family friendly access.
                      </p>
                    </div>
                    <div className="feature-item-body">
                      <p><span>Location:-</span> Sharq and Salwa, Kuwait</p>
                    </div>
                  </div>
                </div>

                {/* Feature Programs Box */}
                <div className="our-features-box feature-program-experience-box">
                  <div className="our-features-item feature-scrolling-ticker-box wow fadeInUp" data-wow-delay="0.6s">
                    <div className="feature-item-content">
                      <h3>Structured Swim Programs</h3>
                      <p>
                        Follow level based programs built for water safety, technique, and endurance.
                      </p>
                    </div>
                    <div className="feature-scrolling-ticker">
                      {[false, true].map((reverse, ri) => (
                        <div key={ri} className={`scrolling-ticker-box${reverse ? ' scroll-reverse' : ''}`}>
                          {[0, 1].map((d) => (
                            <div key={d} className="scrolling-content">
                              {[
                                { img: 1, label: 'Learn to Swim' },
                                { img: 2, label: 'Water Babies' },
                                { img: 3, label: 'Adult Classes' },
                                { img: 4, label: 'Junior Development' },
                                { img: 5, label: 'Junior Competitive' },
                                { img: 6, label: 'Private Sessions' },
                              ].map((item, ii) => (
                                <span key={ii}>
                                  <Image src={`/images/feature-scrolling-ticker-img-${item.img}.svg`} alt="" width={20} height={20} />
                                  {' '}{item.label}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="our-features-item experience-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="icon-box">
                      <Image src="/images/icon-our-feature-item.svg" alt="" width={40} height={40} />
                    </div>
                    <div className="feature-item-content">
                      <h3>Since 2013 in Kuwait</h3>
                      <p>
                        Our team helps swimmers progress safely with station based training, clear evaluation.
                      </p>
                      <ul>
                        <li>Small groups with 6:1 coaching ratio</li>
                        <li>Indoor pool heated 30 to 32°C in winter</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image src="/images/author-6.jpg" alt="" width={32} height={32} />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <Image src="/images/icon-phone-primary.svg" alt="" width={20} height={20} />
                  </div>
                </div>
                <p>
                  Let&apos;s help your child swim with confidence.{' '}
                  <Link href="#">Register Online</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <div className="how-it-work bg-section dark-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">How It Works</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  A smart approach to swimming progress and water safety
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="how-work-items-list">
                {[
                  {
                    step: 'Step 01',
                    title: 'Register with SwimAmerica',
                    desc: 'Start online and choose the right program for your swimmer, from beginners to advanced levels.',
                    li: 'Select the package and class schedule that fits',
                    img: 'step_01',
                  },
                  {
                    step: 'Step 02',
                    title: 'Assessment & Level Placement',
                    desc: 'We evaluates swimming ability and places each swimmer in the correct station level for safe, fast progress.',
                    li: 'Daily evaluation with clear station goals',
                    img: 'step_02',
                    delay: '0.2s',
                  },
                  {
                    step: 'Step 03',
                    title: 'Station Based Training',
                    desc: 'Swimmers train in structured stations, building water safety, confidence, and stronger stroke technique.',
                    li: 'Lessons designed around progress and safety',
                    img: 'step_03',
                    delay: '0.4s',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="how-work-item wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="how-work-item-image">
                      <figure className="image-anime">
                        <Image src={`/images/${item.img}.svg`} alt={item.title} width={300} height={300} />
                      </figure>
                      <div className="how-work-item-step"><p>{item.step}</p></div>
                    </div>
                    <div className="how-work-item-body">
                      <div className="how-work-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                      <div className="how-work-item-list">
                        <ul><li>{item.li}</li></ul>
                      </div>
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
                      <Image src="/images/author-6.jpg" alt="" width={32} height={32} />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <Image src="/images/icon-phone-primary.svg" alt="" width={20} height={20} />
                  </div>
                </div>
                <p>
                  Simple steps behind our SwimAmerica system, built to support every swimmer.{' '}
                  <Link href="#">See All Programs</Link>
                </p>
                <ul>
                  <li>8,000+ Graduates</li>
                  <li>Since 2013</li>
                  <li>Trusted by Families in Kuwait</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR TRAINERS SECTION ===== */}
      <div className="our-trainers">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-xl-6">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Our Coaches</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Coaches supporting your goals and confidence
                </h2>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>
                    Our experienced coaches work closely with swimmers to build water safety,
                    proper technique, and steady progress with encouragement in every session.
                  </p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="#" className="btn-default">View All Coaches</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { img: 1, name: 'Eslam Alfalah', specialty: 'Learn to Swim Coaching', delay: '0.2s' },
              { img: 2, name: 'Sameera Anuranjana', specialty: 'Advanced Training Support', delay: '0.4s' },
              { img: 3, name: 'Upul Jayawickrama', specialty: 'Stroke Technique Development', delay: '0.4s' },
            
            ].map((trainer, idx) => (
              <div key={idx} className="col-xl-4 col-md-6">
                <div className="trainer-item wow fadeInUp" data-wow-delay={trainer.delay}>
                  <div className="trainer-item-image">
                    <Link href="#" data-cursor-text="View">
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
                    <h2><Link href="#">{trainer.name}</Link></h2>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.8s">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <Image src="/images/author-6.jpg" alt="" width={32} height={32} />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <Image src="/images/icon-phone-primary.svg" alt="" width={20} height={20} />
                  </div>
                </div>
                <p>
                  Let&apos;s help you choose the right level today.{' '}
                  <Link href="#">Book an Assessment</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PRICING SECTION ===== */}
      <div className="our-pricing bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">SwimAmerica Registration</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Choose the right option to start your swim journey
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                name: 'New Customer Registration',
                delay: '0.2s',
                desc: 'New to SwimAmerica Kuwait. Create your account, choose your program, and complete registration online in a few simple steps.',
                bullets: [
                  'Quick online registration',
                  'Choose program and preferred location',
                  'Receive confirmation and next steps',
                ],
                strip: 'Start your registration online',
                button: 'Register Now',
              },
              {
                name: 'Existing Customer Login',
                delay: '0.4s',
                desc: 'Already registered. Log in to manage your swimmer details, continue your learning journey, and stay updated with schedules.',
                bullets: [
                  'Access your account anytime',
                  'Update swimmer profile details',
                  'Stay informed about classes',
                ],
                strip: 'Continue with your account',
                button: 'Login Now',
              },
            ].map((plan, idx) => (
              <div key={idx} className="col-xl-4 col-md-6">
                <div className="pricing-item wow fadeInUp" data-wow-delay={plan.delay}>
                  <div className="pricing-item-header">
                    <div className="icon-box">
                      <Image src="/images/icon-pricing-item-1.svg" alt="" width={40} height={40} />
                    </div>
                    <div className="pricing-item-content">
                      <h2>{plan.name}</h2>
                      <p>{plan.desc}</p>
                    </div>
                    <div className="pricing-item-list">
                      <ul>
                        {plan.bullets.map((b, bi) => (
                          <li key={bi}> {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-body">
                    <div className="pricing-item-price-box">
                      <div className="pricing-item-price">
                        <p>{plan.strip}</p>
                      </div>
                      <div className="pricing-item-btn">
                        <Link href="#" className="btn-default btn-highlighted">
                          {plan.button}
                        </Link>
                      </div>
                    </div>
                    <div className="pricing-item-body-content">
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Pricing CTA Box */}
            <div className="col-xl-4">
              <div className="pricing-cta-box wow fadeInUp" data-wow-delay="0.6s">
                <div className="pricing-cta-header">
                  <div className="pricing-cta-content">
                    <h2>Need Help Choosing the Right Program</h2>
                    <p>
                      Our team will guide you with level placement, location details, and the best
                      starting point for your swimmer.
                    </p>
                    <h3>
                      Call Us At: <a href="#">+965 5664 1177</a>
                    </h3>
                  </div>
                  <div className="pricing-cta-btn">
                    <Link href="#" className="btn-default btn-highlighted">
                      Call Us Today
                    </Link>
                  </div>
                </div>
                <div className="pricing-cta-image">
                  <figure>
                    <Image src="/images/our-pricing-cta-image.png" alt="Pricing CTA" width={300} height={300} />
                  </figure>
                </div>
              </div>
            </div>

            {/* Pricing Benefits */}
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

      {/* ===== FAQS SECTION ===== */}
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
                    <h3>Need help choosing a level</h3>
                    <p>
                      Call Us: <a href="tel:+96556641177">+965 5664 1177</a>
                    </p>
                  </div>
                  <div className="faqs-cta-btn">
                    <Link href="#" className="btn-default btn-highlighted">
                      View All FAQ&apos;s
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faqs-content">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Frequently Asked Questions</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Common questions about lessons and training
                  </h2>
                </div>
                <div className="faq-accordion" id="accordion">
                  {[
                    { id: 1, q: 'Q1. What age can my child start SwimAmerica', open: true },
                    { id: 2, q: 'Q2. How many swimmers are in one class' },
                    { id: 3, q: 'Q3. How long is each class session' },
                    { id: 4, q: 'Q4. Is the pool heated during winter' },
                    { id: 5, q: 'Q5. Do you offer women only classes' },
                  ].map((faq, idx) => (
                    <div key={idx} className="accordion-item wow fadeInUp" data-wow-delay={`${idx * 0.2}s`}>
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
                          {faq.id === 1 && (
                            <>
                              <p>
                                Swimmers can start from 1 year old in Water Babies, and from 2.5 years in the Learn to
                                Swim program. We place each swimmer in the right level based on ability, not only age.
                              </p>
                              <ul>
                                <li>Water Babies available for 1 to 2.5 years</li>
                                <li>Learn to Swim starts from 2.5 years and above</li>
                              </ul>
                            </>
                          )}
                          {faq.id === 2 && (
                            <p>
                              We follow a 6:1 ratio, meaning up to six kids per instructor for focused attention and
                              safer learning.
                            </p>
                          )}
                          {faq.id === 3 && (
                            <p>
                              Each class is 50 minutes, designed to keep swimmers active, engaged, and progressing
                              through stations.
                            </p>
                          )}
                          {faq.id === 4 && (
                            <p>
                              Yes, the indoor pool is heated between 30 to 32°C in winter for comfortable learning.
                            </p>
                          )}
                          {faq.id === 5 && (
                            <p>
                              Yes, women only sessions are available with female coaches, and no men are present during
                              those sessions.
                            </p>
                          )}
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

      {/* ===== TESTIMONIALS SECTION ===== */}
      <div className="our-testimonials bg-section dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="our-testimonial-content">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Our Testimonials</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Trusted by families who learn and grow
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Hear directly from parents and swimmers about their experience, progress, and confidence gained
                    through SwimAmerica&apos;s structured station based training.
                  </p>
                </div>
                <div className="contact-us-circle wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="#">
                    <Image src="/images/contact-us-circle.svg" alt="Safe Learning. Real Progress." width={120} height={120} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial-slider wow fadeInUp">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {[
                      {
                        author: 'Sara A',
                        img: 1,
                        tag: 'Parent',
                        quote:
                          'Within a few weeks, my child went from fear to confidence. The station system makes progress clear, and the coaches explain everything patiently.',
                      },
                      {
                        author: 'Faisal M',
                        img: 2,
                        tag: 'Parent',
                        quote:
                          'Very organized program and safe environment. The 6:1 ratio really helps. My son’s stroke technique improved and he looks forward to class.',
                      },
                      {
                        author: 'Reem K',
                        img: 3,
                        tag: 'Parent',
                        quote:
                          'Great coaching and constant supervision. The pool is comfortable in winter and the team helped us choose the right level from the start.',
                      },
                    ].map((t, idx) => (
                      <div key={idx} className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-rating">
                              {[1, 2, 3, 4, 5].map((s) => <i key={s} className="fa-solid fa-star"></i>)}
                            </div>
                            <div className="testimonial-item-quote">
                              <Image src="/images/testimonial-quote.svg" alt="Quote" width={40} height={40} />
                            </div>
                          </div>
                          <div className="testimonial-item-body">
                            <div className="testimonial-item-content">
                              <p>&ldquo; {t.quote} &rdquo;</p>
                            </div>
                            <div className="testimonial-item-author">
                              <div className="testimonial-author-image">
                                <figure className="image-anime">
                                  <Image src={`/images/author-${t.img}.jpg`} alt={t.author} width={60} height={60} />
                                </figure>
                              </div>
                              <div className="testimonial-author-content">
                                <h2>{t.author}</h2>
                                <p>{t.tag}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="testimonial-slider-btn">
                    <div className="testimonial-button-prev"></div>
                    <div className="testimonial-button-next"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Supports Logos Slider */}
            <div className="col-lg-12">
              <div className="company-supports-slider-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="company-supports-content">
                  <hr />
                  <p>Trusted by families across Kuwait since 2013</p>
                  <hr />
                </div>
                <div className="company-supports-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {['Schools', 'Community Partners', 'Sports Programs', 'Sponsors', 'Families'].map(
                        (label, idx) => (
                        <div key={idx} className="swiper-slide">
                          <div className="company-supports-logo">
                            <Image
                              src={`/images/company-supports-logo-${idx + 1}.svg`}
                              alt={label}
                              width={120}
                              height={60}
                            />
                            <p>{label}</p>
                          </div>
                        </div>
                      ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR BLOG SECTION ===== */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Latest Blogs</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Expert tips to inspire your swimming journey
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                img: 1,
                tag: 'Water Safety',
                title: '5 Water Safety Habits Every Parent Should Teach Early',
                desc: 'Simple habits that help children feel confident in water and build safer swimming routines from the first lesson.',
                delay: '0.2s',
              },
              {
                img: 2,
                tag: 'Learn to Swim',
                title: 'Common Beginner Mistakes That Slow Down Swim Progress',
                desc: 'From breathing to body position, learn what to avoid so your swimmer improves faster with better control.',
                delay: '0.4s',
              },
              {
                img: 3,
                tag: 'Stroke Technique',
                title: 'Freestyle Basics Explained: How to Start the Right Way',
                desc: 'A clear beginner guide to breathing, kicking, and arm movement that builds strong foundations for future levels.',
                delay: '0.6s',
              },
            ].map((post, idx) => (
              <div key={idx} className="col-xl-4 col-md-6">
                <div className="post-item wow fadeInUp" data-wow-delay={post.delay}>
                  <div className="post-item-image">
                    <Link href="#" data-cursor-text="View">
                      <figure>
                        <Image src={`/images/post-${post.img}.jpg`} alt={post.title} width={400} height={300} />
                      </figure>
                    </Link>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-tag">
                      <Link href="#">{post.tag}</Link>
                    </div>
                    <div className="post-item-content">
                      <h2><Link href="#">{post.title}</Link></h2>
                      <p>{post.desc}</p>
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
