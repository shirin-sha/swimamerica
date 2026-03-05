import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Programs – GymPro' };

const programs = [
  {
    slug: 'strength-training',
    img: 1,
    icon: 1,
    no: '01.',
    title: 'Strength Training',
    desc: 'Strength training programs designed for all fitness levels using modern equipment.',
    active: true,
  },
  {
    slug: 'weight-loss',
    img: 2,
    icon: 2,
    no: '02.',
    title: 'Weight Loss Program',
    desc: 'A balanced workout plan combining cardio, strength, fitness and functional training.',
  },
  {
    slug: 'cardio-endurance',
    img: 3,
    icon: 3,
    no: '03.',
    title: 'Cardio & Endurance Training',
    desc: 'Boost heart health and stamina with guided cardio sessions that include treadmill.',
  },
  {
    slug: 'group-fitness',
    img: 4,
    icon: 4,
    no: '04.',
    title: 'Group Fitness Classes',
    desc: 'High energy group workouts that keep fun & motivating while improving strength.',
  },
  {
    slug: 'muscle-building',
    img: 5,
    icon: 5,
    no: '05.',
    title: 'Muscle Building Program',
    desc: 'Advanced training fitness routines designed to maximize muscle growth through.',
  },
  {
    slug: 'beginner-fitness',
    img: 6,
    icon: 6,
    no: '06.',
    title: 'Beginner Fitness Program',
    desc: 'A safe and guided program for beginners focusing on foundational movements.',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Programs" breadcrumb="Our Programs" />

      <div className="our-programs">
        <div className="container">
          <div className="row program-item-list">
            {programs.map((p, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className={`program-item${p.active ? ' active' : ''} wow fadeInUp`} data-wow-delay={`${i * 0.2}s`}>
                  <div className="program-item-image">
                    <figure>
                      <Image src={`/images/program-image-${p.img}.jpg`} alt={p.title} width={400} height={300} />
                    </figure>
                  </div>
                  <div className="program-item-body">
                    <div className="program-item-header">
                      <div className="icon-box">
                        <Image src={`/images/icon-program-item-${p.icon}.svg`} alt="" width={40} height={40} />
                      </div>
                      <div className="program-item-no"><span>{p.no}</span></div>
                    </div>
                    <div className="program-item-body-content">
                      <div className="program-item-content">
                        <h2>
                          <Link href={`/programs/${p.slug}`}>
                            {p.title}
                          </Link>
                        </h2>
                        <p>{p.desc}</p>
                      </div>
                      <div className="program-item-btn">
                        <Link
                          href={`/programs/${p.slug}`}
                          className="readmore-btn"
                        >
                          View Program
                        </Link>
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
