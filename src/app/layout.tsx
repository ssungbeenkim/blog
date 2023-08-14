import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/conponents/Header';
import Footer from '@/conponents/Footer';
import { Metadata } from 'next';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Vincent's Blog",
    template: "Vincent's Blog | %s",
  },
  description: "Sofrware Engineer Vincent's Blog",
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='mx-auto flex w-full max-w-screen-2xl flex-col'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
