import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Image Gallery – GymPro' };

const galleryImages = [
  { img: 'gallery-image-1.jpg' }, { img: 'gallery-image-2.jpg' },
  { img: 'gallery-image-3.jpg' }, { img: 'gallery-image-4.jpg' },
  { img: 'gallery-image-5.jpg' }, { img: 'gallery-image-6.jpg' },
  { img: 'gallery-image-7.jpg' }, { img: 'gallery-image-8.jpg' },
  { img: 'gallery-image-9.jpg' },
];

export default function ImageGalleryPage() {
  return (
    <>
      <Header />
      <PageHeader title="Image Gallery" breadcrumb="Image Gallery" />

      <div className="image-gallery">
        <div className="container">
          <div className="row">
            {galleryImages.map((item, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="gallery-item wow fadeInUp" data-wow-delay={`${(i % 3) * 0.2}s`}>
                  <a href={`/images/${item.img}`} className="popup-image" data-cursor-text="View">
                    <figure>
                      <Image src={`/images/${item.img}`} alt={`Gallery ${i + 1}`} width={400} height={300} />
                    </figure>
                  </a>
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
