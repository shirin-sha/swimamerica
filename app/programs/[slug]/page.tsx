import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const programDetails = [
  {
    slug: 'strength-training',
    title: 'Strength Training',
    duration: '12 Weeks',
    sessions: '3-5 per week',
    level: 'All Levels',
    equipment: 'Full Gym Access',
    img: 1,
  },
  {
    slug: 'weight-loss',
    title: 'Weight Loss Program',
    duration: '10 Weeks',
    sessions: '3-4 per week',
    level: 'Beginner to Intermediate',
    equipment: 'Cardio & Strength Area',
    img: 2,
  },
  {
    slug: 'cardio-endurance',
    title: 'Cardio & Endurance Training',
    duration: '8 Weeks',
    sessions: '3 per week',
    level: 'All Levels',
    equipment: 'Cardio Zone',
    img: 3,
  },
  {
    slug: 'group-fitness',
    title: 'Group Fitness Classes',
    duration: 'Ongoing',
    sessions: 'Unlimited classes',
    level: 'All Levels',
    equipment: 'Studio Access',
    img: 4,
  },
  {
    slug: 'muscle-building',
    title: 'Muscle Building Program',
    duration: '16 Weeks',
    sessions: '4-5 per week',
    level: 'Intermediate to Advanced',
    equipment: 'Free Weights & Machines',
    img: 5,
  },
  {
    slug: 'beginner-fitness',
    title: 'Beginner Fitness Program',
    duration: '6 Weeks',
    sessions: '2-3 per week',
    level: 'Beginner',
    equipment: 'Guided Machines Area',
    img: 6,
  },
];

export function generateStaticParams() {
  return programDetails.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program =
    programDetails.find((p) => p.slug === slug) ?? programDetails[0];

  return (
    <>
      <Header />
      <PageHeader title={program.title} breadcrumb="Program Details" />

      <div className="program-single">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="program-single-content wow fadeInUp">
                <div className="program-single-image">
                  <figure>
                    <Image
                      src={`/images/program-image-${program.img}.jpg`}
                      alt={program.title}
                      width={800}
                      height={500}
                    />
                  </figure>
                </div>
                <div className="program-single-body">
                  <div className="section-title">
                    <span className="section-sub-title">
                      {program.title}
                    </span>
                    <h2
                      className="text-anime-style-3"
                      data-cursor="-opaque"
                    >
                      Build strength, improve endurance, and transform your
                      body
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Our Strength Training program is designed to help you build functional muscle, increase overall strength, and improve your body composition. Whether you are a beginner or an experienced lifter, our certified trainers will create a personalized plan tailored to your goals.</p>
                  </div>
                  <div className="program-single-info wow fadeInUp" data-wow-delay="0.4s">
                    <ul>
                      <li>
                        <span>Duration:</span> {program.duration}
                      </li>
                      <li>
                        <span>Sessions:</span> {program.sessions}
                      </li>
                      <li>
                        <span>Level:</span> {program.level}
                      </li>
                      <li>
                        <span>Equipment:</span> {program.equipment}
                      </li>
                    </ul>
                  </div>
                  <div className="program-single-list wow fadeInUp" data-wow-delay="0.6s">
                    <h3>What&apos;s Included</h3>
                    <ul>
                      <li>Personalized workout plan tailored to your fitness level</li>
                      <li>Weekly progress tracking and form correction sessions</li>
                      <li>Nutrition guidance to support muscle growth and recovery</li>
                      <li>Access to all premium equipment and training zones</li>
                      <li>Certified trainer support throughout the program</li>
                    </ul>
                  </div>
                  <div className="program-single-btn wow fadeInUp" data-wow-delay="0.8s">
                    <Link href="/contact" className="btn-default btn-highlighted">Enroll Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="program-sidebar">
                <div className="sidebar-widget wow fadeInUp">
                  <h3>Other Programs</h3>
                  <ul className="sidebar-program-list">
                    {programDetails.map((prog) => (
                      <li key={prog.slug}>
                        <Link href={`/programs/${prog.slug}`}>
                          {prog.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-cta wow fadeInUp" data-wow-delay="0.2s">
                  <h3>Book a Free Trial</h3>
                  <p>Experience our training firsthand with a complimentary session.</p>
                  <Link href="/contact" className="btn-default btn-highlighted">Book Now</Link>
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
