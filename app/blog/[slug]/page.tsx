import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const blogPosts = [
  {
    slug: 'nutrition-and-training',
    tag: 'Endurance Training',
    title: 'How to Combine Nutrition and Training for Maximum Results',
    date: '05/03/26',
    img: 1,
  },
  {
    slug: 'gym-mistakes',
    tag: 'Group Classes',
    title: '5 Common Gym Mistakes That Can Hinder Your Progress',
    date: '05/03/26',
    img: 2,
  },
  {
    slug: 'functional-training',
    tag: 'Nutrition Guidance',
    title: 'Functional Training Explained: Why It Matters and How to Start Safely',
    date: '05/03/26',
    img: 3,
  },
  {
    slug: 'strength-exercises',
    tag: 'Weight Training',
    title: 'Top 10 Strength Training Exercises You Should Add to Your Routine',
    date: '05/03/26',
    img: 4,
  },
  {
    slug: 'cardio-workout',
    tag: 'Cardio Training',
    title: 'The Role of Cardio in a Balanced Workout Plan and Recovery',
    date: '05/03/26',
    img: 5,
  },
  {
    slug: 'gym-habit',
    tag: 'Beginner Tips',
    title: 'How to Stay Motivated and Build a Consistent Gym Habit',
    date: '05/03/26',
    img: 6,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post =
    blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];

  return (
    <>
      <Header />
      <PageHeader title={post.title} breadcrumb="Blog Details" />

      <div className="blog-single">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-single-content wow fadeInUp">
                <div className="blog-single-image">
                  <figure>
                    <Image
                      src={`/images/post-${post.img}.jpg`}
                      alt={post.title}
                      width={800}
                      height={500}
                    />
                  </figure>
                </div>
                <div className="blog-single-body">
                  <div className="post-item-tag">
                    <Link href="/blog">{post.tag}</Link>
                  </div>
                  <div className="section-title">
                    <h2
                      className="text-anime-style-3"
                      data-cursor="-opaque"
                    >
                      {post.title}
                    </h2>
                  </div>
                  <div className="blog-single-meta wow fadeInUp" data-wow-delay="0.2s">
                    <span>
                      <i className="fa-regular fa-calendar"></i>{' '}
                      {post.date}
                    </span>
                    <span><i className="fa-regular fa-user"></i> Admin</span>
                    <span><i className="fa-regular fa-comment"></i> 5 Comments</span>
                  </div>
                  <div className="blog-single-text wow fadeInUp" data-wow-delay="0.4s">
                    <p>If you want to get the most out of your workouts, it&apos;s important to combine exercise with proper nutrition. The two work synergistically — training creates the stimulus for adaptation, while nutrition provides the building blocks for recovery and growth.</p>
                    <p>Understanding how to fuel your body before, during, and after training can make the difference between mediocre results and transformational progress. Whether your goal is fat loss, muscle gain, or improved performance, nutrition plays a critical role.</p>
                    <h3>The Key Principles</h3>
                    <ul>
                      <li>Time your carbohydrate intake around your training sessions</li>
                      <li>Ensure adequate protein intake for muscle repair and growth</li>
                      <li>Stay well hydrated throughout the day, not just during training</li>
                      <li>Don&apos;t neglect healthy fats for hormonal balance and joint health</li>
                    </ul>
                    <p>Working with a GymPro nutrition coach can help you create a personalized plan that aligns with your training schedule and lifestyle goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="blog-sidebar">
                <div className="sidebar-widget wow fadeInUp">
                  <h3>Recent Posts</h3>
                  <ul className="sidebar-post-list">
                    {[1,2,3].map(i => (
                      <li key={i}>
                        <div className="sidebar-post-image">
                          <Image src={`/images/post-${i}.jpg`} alt="" width={70} height={70} />
                        </div>
                        <div className="sidebar-post-content">
                          <Link href="/blog/blog-details">Recent Blog Post {i}</Link>
                          <span>March 5, 2026</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-widget wow fadeInUp" data-wow-delay="0.2s">
                  <h3>Categories</h3>
                  <ul className="sidebar-cat-list">
                    {['Endurance Training', 'Strength Training', 'Nutrition', 'Weight Loss', 'Cardio'].map((cat, i) => (
                      <li key={i}><Link href="/blog">{cat}</Link></li>
                    ))}
                  </ul>
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
