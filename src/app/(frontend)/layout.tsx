import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  );
}
