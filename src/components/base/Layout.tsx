
import Header from '../feature/Header';
import Footer from '../feature/Footer';
import FloatingButtons from '../feature/FloatingButtons';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
