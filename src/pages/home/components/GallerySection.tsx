export default function GallerySection() {
  const openLightbox = (src: string, caption: string) => {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img') as HTMLImageElement;
    const captionEl = document.getElementById('lightbox-caption');
    
    if (lightbox && img && captionEl) {
      img.src = src;
      captionEl.textContent = caption;
      lightbox.classList.add('active');
    }
  };

  return (
    <div className="py-12">
      <h1 className="text-5xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Gallery: Photos & Impact Videos
      </h1>
      <p className="text-xl opacity-80 mb-10 dark:text-cream/90 fade-in-up">
        Witness the impact of your support. Photos and videos from our programs, events, and powerful impact stories. Click to enlarge photos or watch videos.
      </p>

      <h2 className="text-3xl font-display font-bold text-midnight dark:text-peach mb-6 fade-in-up">
        Program Photo Highlights
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/1769352/pexels-photo-1769352.jpeg', 'Leadership workshop: teamwork exercise')}
        >
          <img
            src="https://images.pexels.com/photos/1769352/pexels-photo-1769352.jpeg"
            alt="Leadership workshop"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/1005023/pexels-photo-1005023.jpeg', 'Community event: outdoor activities')}
        >
          <img
            src="https://images.pexels.com/photos/1005023/pexels-photo-1005023.jpeg"
            alt="Community event"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg', 'Family day: shared meal')}
        >
          <img
            src="https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg"
            alt="Family day"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg', 'Volunteers packing food hampers')}
        >
          <img
            src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg"
            alt="Volunteers"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg', 'Digital Media Lab training session')}
        >
          <img
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
            alt="Digital Media Lab"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/1556950/pexels-photo-1556950.jpeg', 'Parenting Group discussion')}
        >
          <img
            src="https://images.pexels.com/photos/1556950/pexels-photo-1556950.jpeg"
            alt="Parenting Group"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', 'Team Building Exercise')}
        >
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            alt="Team Building"
            className="w-full h-48 object-cover"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden shadow-md transition hover:scale-105 cursor-pointer fade-in-up"
          onClick={() => openLightbox('https://images.pexels.com/photos/3760855/pexels-photo-3760855.jpeg', 'Graduation Ceremony')}
        >
          <img
            src="https://images.pexels.com/photos/3760855/pexels-photo-3760855.jpeg"
            alt="Graduation"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>

      <h2 className="text-3xl font-display font-bold text-midnight dark:text-peach mt-12 mb-6 fade-in-up">
        Impact Video Library
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-4 fade-in-up">
          <iframe
            className="w-full h-64 rounded-xl shadow-md"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Impact Story: Summer Horizons"
          ></iframe>
          <h3 className="font-semibold mt-3">Summer Horizons: A Success Story</h3>
          <p className="text-sm opacity-80">Video detailing the experience of three youth in our flagship program.</p>
        </div>

        <div className="glass-card p-4 fade-in-up">
          <iframe
            className="w-full h-64 rounded-xl shadow-md"
            src="https://www.youtube.com/embed/oHg5SJYRHA0?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YAFOAM Mission Overview"
          ></iframe>
          <h3 className="font-semibold mt-3">YAFOAM: Our Mission in Motion</h3>
          <p className="text-sm opacity-80">A short overview of our organizational strategy and community mandate.</p>
        </div>
      </div>
    </div>
  );
}
