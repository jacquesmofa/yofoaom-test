import { Link } from 'react-router-dom';
import Layout from '../../components/base/Layout';
import PhotoGallery from '../../components/feature/PhotoGallery';

export default function GalleryPage() {
  return (
    <Layout>
      <section className="bg-midnight text-cream pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Gallery</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold">Moments from our community</h1>
          <p className="mt-5 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
            Real photos from our programs and events. Tap any photo to see it full size.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-cream dark:bg-darkmode-bg">
        <div className="max-w-7xl mx-auto">
          <PhotoGallery />
        </div>
      </section>

      <section className="py-16 px-4 bg-peach/40 dark:bg-darkmode-card text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight dark:text-cream">Want to be part of the next photo?</h2>
        <p className="mt-3 text-midnight/75 dark:text-cream/75">Volunteer with us or bring your family to our next event.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/get-involved" className="btn-primary">Get Involved</Link>
          <Link to="/contact" className="px-6 py-3 rounded-full border-2 border-midnight text-midnight font-semibold dark:border-cream dark:text-cream">Contact Us</Link>
        </div>
      </section>
    </Layout>
  );
}
