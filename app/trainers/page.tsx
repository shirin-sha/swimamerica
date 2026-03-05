import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Our Trainers – GymPro' };

const trainers = [
  {
    slug: 'albert-flores',
    img: 1,
    name: 'Albert Flores',
    specialty: 'Strength & Conditioning',
  },
  {
    slug: 'jenny-wilson',
    img: 2,
    name: 'Jenny Wilson',
    specialty: 'Yoga & Mobility',
  },
  {
    slug: 'robert-fox',
    img: 3,
    name: 'Robert Fox',
    specialty: 'Personal Training',
  },
  {
    slug: 'savannah-nguyen',
    img: 4,
    name: 'Savannah Nguyen',
    specialty: 'Cardio & Weight Loss',
  },
  {
    slug: 'guy-hawkins',
    img: 5,
    name: 'Guy Hawkins',
    specialty: 'Muscle Building',
  },
  {
    slug: 'annette-black',
    img: 6,
    name: 'Annette Black',
    specialty: 'Functional Fitness',
  },
];

export default function TrainersPage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Trainers" breadcrumb="Our Trainers" />

      <div className="our-trainers">
        <div className="container">
          <div className="row">
            {trainers.map((trainer, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="trainer-item wow fadeInUp" data-wow-delay={`${i * 0.2}s`}>
                  <div className="trainer-item-image">
                    <Link
                      href={`/trainers/${trainer.slug}`}
                      data-cursor-text="View"
                    >
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
                    <h2>
                      <Link href={`/trainers/${trainer.slug}`}>
                        {trainer.name}
                      </Link>
                    </h2>
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
