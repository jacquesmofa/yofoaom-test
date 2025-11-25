import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream dark:bg-darkmode-bg">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-midnight dark:text-peach mb-4">404</h1>
        <p className="text-xl mb-4">Page not found</p>
        <p className="text-sm opacity-70">Redirecting to home...</p>
      </div>
    </div>
  );
}
