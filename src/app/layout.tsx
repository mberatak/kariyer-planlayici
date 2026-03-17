import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Alanım Ne? — Yazılım Kariyer Rehberi',
  description:
    'Yazılım ve bilgisayar mühendisliği öğrencileri için kişiselleştirilmiş kariyer yönlendirme platformu. 10 dakikada alanını keşfet.',
  keywords: 'kariyer, yazılım, bilgisayar mühendisliği, web geliştirme, yapay zeka, siber güvenlik, devops',
  openGraph: {
    title: 'Alanım Ne? — Yazılım Kariyer Rehberi',
    description: 'Hangi yazılım alanına gitmeli? Kişilik testinle öğren.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white antialiased min-h-screen noise-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
