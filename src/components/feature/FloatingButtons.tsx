
import { useNavigate } from 'react-router-dom';

export default function FloatingButtons() {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button
          onClick={() => navigate('/get-involved')}
          className="w-14 h-14 flex items-center justify-center bg-peach text-midnight rounded-full shadow-lg hover:bg-gold transition cursor-pointer"
          aria-label="Donate"
        >
          <i className="ri-heart-fill text-2xl"></i>
        </button>
        <button
          onClick={() => navigate('/get-involved')}
          className="w-14 h-14 flex items-center justify-center bg-midnight text-cream rounded-full shadow-lg hover:bg-midnight/90 transition cursor-pointer"
          aria-label="Volunteer"
        >
          <i className="ri-hand-heart-fill text-2xl"></i>
        </button>
      </div>
    </>
  );
}
