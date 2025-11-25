export default function Lightbox() {
  const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
  };

  return (
    <div id="lightbox" className="modal" onClick={closeLightbox}>
      <div className="modal-card p-6 w-11/12 max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-xl">Photo Gallery</h3>
          <button
            onClick={closeLightbox}
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-midnight/20 dark:border-white/20 hover:bg-peach/50 transition cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        <div>
          <img
            id="lightbox-img"
            src=""
            alt=""
            className="w-full rounded-lg max-h-[80vh] object-contain mx-auto"
          />
          <p id="lightbox-caption" className="text-sm opacity-80 mt-3 text-center"></p>
        </div>
      </div>
    </div>
  );
}
