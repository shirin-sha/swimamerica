import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const trainers = [
  {
    slug: 'albert-flores',
    name: 'Albert Flores',
    specialization: 'Strength & Conditioning',
    experience: '8+ Years',
    certification: 'CSCS, CPT',
    availability: 'Mon - Sat',
    img: 1,
  },
  {
    slug: 'jenny-wilson',
    name: 'Jenny Wilson',
    specialization: 'Yoga & Mobility',
    experience: '6+ Years',
    certification: 'RYT-500, CPT',
    availability: 'Mon - Fri',
    img: 2,
  },
  {
    slug: 'savannah-nguyen',
    name: 'Savannah Nguyen',
    specialization: 'Cardio & Weight Loss',
    experience: '5+ Years',
    certification: 'CPT, Nutrition Coach',
    availability: 'Tue - Sun',
    img: 4,
  },
];

export function generateStaticParams() {
  return trainers.map((t) => ({ slug: t.slug }));
}

export default async function TrainerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trainer =
    trainers.find((t) => t.slug === slug) ?? trainers[0];

  return (
    <>
      <Header />
      <PageHeader title="Trainer Details" breadcrumb="Trainer Details" />

      <div className="trainer-single">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="trainer-single-image wow fadeInUp">
                <figure>
                  <Image
                    src={`/images/trainer-${trainer.img}.jpg`}
                    alt={trainer.name}
                    width={500}
                    height={600}
                  />
                </figure>
                <div className="trainer-social-list">
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="trainer-single-content wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-title">
                  <span className="section-sub-title">
                    {trainer.specialization}
                  </span>
                  <h2
                    className="text-anime-style-3"
                    data-cursor="-opaque"
                  >
                    {trainer.name}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Albert is a certified strength and conditioning specialist with over 8 years of experience helping clients achieve their fitness goals through structured, science-based training programs.</p>
                </div>
                <div className="trainer-single-info wow fadeInUp" data-wow-delay="0.4s">
                  <ul>
                    <li>
                      <span>Specialization:</span>{' '}
                      {trainer.specialization}
                    </li>
                    <li>
                      <span>Experience:</span> {trainer.experience}
                    </li>
                    <li>
                      <span>Certification:</span>{' '}
                      {trainer.certification}
                    </li>
                    <li>
                      <span>Availability:</span>{' '}
                      {trainer.availability}
                    </li>
                  </ul>
                </div>
                <div className="trainer-single-skills wow fadeInUp" data-wow-delay="0.6s">
                  <h3>Expertise</h3>
                  <ul>
                    <li>Powerlifting &amp; Olympic Lifting</li>
                    <li>Athletic Performance Training</li>
                    <li>Injury Prevention &amp; Rehabilitation</li>
                    <li>Body Composition &amp; Fat Loss</li>
                  </ul>
                </div>
                <div className="trainer-single-btn wow fadeInUp" data-wow-delay="0.8s">
                  <Link href="#" className="btn-default btn-highlighted">Book a Session</Link>
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
