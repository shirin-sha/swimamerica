import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Video Gallery – GymPro' };

const videos = [
  { thumb: 'video-gallery-image-1.jpg', url: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
  { thumb: 'video-gallery-image-2.jpg', url: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
  { thumb: 'video-gallery-image-3.jpg', url: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
  { thumb: 'video-gallery-image-4.jpg', url: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
  { thumb: 'video-gallery-image-5.jpg', url: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
  { thumb: 'video-gallery-image-6.jpg', url: 'https://www.youtube.com/watch?v=Y-x0efG1seA' },
];

export default function VideoGalleryPage() {
  return (
    <>
      <Header />
      <PageHeader title="Video Gallery" breadcrumb="Video Gallery" />

      <div className="video-gallery">
        <div className="container">
          <div className="row">
            {videos.map((video, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="video-gallery-item wow fadeInUp" data-wow-delay={`${(i % 3) * 0.2}s`}>
                  <div className="video-gallery-image">
                    <figure>
                      <Image src={`/images/${video.thumb}`} alt={`Video ${i + 1}`} width={400} height={270} />
                    </figure>
                    <div className="video-play-btn">
                      <a href={video.url} className="popup-video" data-cursor-text="Play">
                        <i className="fa-solid fa-play"></i>
                      </a>
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
