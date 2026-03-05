import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blog – GymPro' };

const posts = [
  {
    slug: 'nutrition-and-training',
    img: 1,
    tag: 'Endurance Training',
    title:
      'How to Combine Nutrition and Training for Maximum Results',
    desc: "If you want to get the most out of your work outs, it's important to combine exercise.",
    delay: '',
  },
  {
    slug: 'gym-mistakes',
    img: 2,
    tag: 'Group Classes',
    title: '5 Common Gym Mistakes That Can Hinder Your Progress',
    desc: 'This blog highlights five common pitfalls, and including poor form, skipping warm ups.',
    delay: '0.2s',
  },
  {
    slug: 'functional-training',
    img: 3,
    tag: 'Nutrition Guidance',
    title:
      'Functional Training Explained: Why It Matters and How to Start Safely',
    desc: 'Functional training focuses on exercises that mimic real-life movements, strength.',
    delay: '0.4s',
  },
  {
    slug: 'strength-exercises',
    img: 4,
    tag: 'Weight Training',
    title:
      'Top 10 Strength Training Exercises You Should Add to Your Routine',
    desc: 'Strength training is one of the most effective ways to build muscle, boost metabolism.',
    delay: '0.6s',
  },
  {
    slug: 'cardio-workout',
    img: 5,
    tag: 'Cardio Training',
    title:
      'The Role of Cardio in a Balanced Workout Plan and Recovery',
    desc: 'Cardio is a key component of any well-rounded fitness routine. It helps build endurance.',
    delay: '0.8s',
  },
  {
    slug: 'gym-habit',
    img: 6,
    tag: 'Beginner Tips',
    title:
      'How to Stay Motivated and Build a Consistent Gym Habit',
    desc: 'Staying motivated to work out regularly can be a challenge for many, but with right strategies.',
    delay: '1s',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Blogs" breadcrumb="Our Blogs" />

      <div className="page-blog">
        <div className="container">
          <div className="row">
            {posts.map((post, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="post-item wow fadeInUp" data-wow-delay={post.delay}>
                  <div className="post-item-image">
                    <Link
                      href={`/blog/${post.slug}`}
                      data-cursor-text="View"
                    >
                      <figure>
                        <Image src={`/images/post-${post.img}.jpg`} alt={post.title} width={400} height={300} />
                      </figure>
                    </Link>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-tag">
                      <Link href={`/blog/${post.slug}`}>{post.tag}</Link>
                    </div>
                    <div className="post-item-content">
                      <h2>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
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
