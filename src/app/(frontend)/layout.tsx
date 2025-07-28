import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';
import { Header } from '@/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-white">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}
