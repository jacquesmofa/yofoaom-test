import { useCallback, useEffect, useRef, useState } from 'react';
import gallery from '../../content/gallery.json';

// Photo gallery: albums from src/content/gallery.json, a masonry grid and a full-screen viewer
// (arrows, swipe, Escape, counter). Cloudinary sizes each picture for its slot.
type Album = { slug: string; title: string; description: string; alt: string; photos: string[] };
const albums = gallery.albums as Album[];

export const sized = (url: string, w: number) =>
  url.includes('/upload/') ? url.replace('/upload/', `/upload/c_limit,w_${w},q_auto,f_auto/`) : url;

export function GalleryPreview({ count = 6 }: { count?: number }) {
  const photos = albums.flatMap((a) => a.photos.map((p) => ({ p, alt: a.alt }))).slice(0, count);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {photos.map(({ p, alt }, i) => (
        <img
          key={p}
          src={sized(p, 700)}
          alt={`${alt}, photo ${i + 1}`}
          loading="lazy"
          className={`w-full rounded-2xl object-cover ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full' : 'aspect-[4/3]'}`}
        />
      ))}
    </div>
  );
}

export default function PhotoGallery() {
  const [albumIndex, setAlbumIndex] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const album = albums[albumIndex];
  const total = album.photos.length;

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % total)), [total]);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + total) % total)), [total]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, next, prev]);

  const touchX = useRef<number | null>(null);

  return (
    <div>
      {albums.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Albums">
          {albums.map((a, i) => (
            <button
              key={a.slug}
              role="tab"
              aria-selected={i === albumIndex}
              onClick={() => setAlbumIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                i === albumIndex ? 'bg-midnight text-cream dark:bg-gold dark:text-midnight' : 'bg-peach/40 text-midnight hover:bg-peach dark:bg-white/10 dark:text-cream'
              }`}
            >
              {a.title} <span className="opacity-60">· {a.photos.length}</span>
            </button>
          ))}
        </div>
      )}

      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-midnight dark:text-cream">{album.title}</h2>
        <p className="mt-3 text-lg text-midnight/75 dark:text-cream/75">{album.description}</p>
        <p className="mt-2 text-sm uppercase tracking-widest text-gold">{total} photos</p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {album.photos.map((p, i) => (
          <button
            key={p}
            type="button"
            onClick={() => setOpen(i)}
            className="group mb-3 md:mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
            aria-label={`Open photo ${i + 1} of ${total}`}
          >
            <img
              src={sized(p, 640)}
              alt={`${album.alt}, photo ${i + 1}`}
              loading={i < 8 ? 'eager' : 'lazy'}
              className="w-full h-auto transition duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/95"
          role="dialog"
          aria-modal="true"
          aria-label={`${album.title}, photo ${open + 1} of ${total}`}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
            touchX.current = null;
          }}
        >
          <img
            src={sized(album.photos[open], 1800)}
            alt={`${album.alt}, photo ${open + 1}`}
            className="max-h-[86vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={close} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-cream text-2xl flex items-center justify-center cursor-pointer" aria-label="Close">
            <i className="ri-close-line" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-cream text-2xl flex items-center justify-center cursor-pointer" aria-label="Previous photo">
            <i className="ri-arrow-left-s-line" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-cream text-2xl flex items-center justify-center cursor-pointer" aria-label="Next photo">
            <i className="ri-arrow-right-s-line" />
          </button>
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm tracking-widest text-cream/80">
            {open + 1} / {total}
          </p>
          {/* preload the neighbours so swiping feels instant */}
          <link rel="preload" as="image" href={sized(album.photos[(open + 1) % total], 1800)} />
        </div>
      )}
    </div>
  );
}
