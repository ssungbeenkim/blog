import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/conponents/Header';
import Footer from '@/conponents/Footer';
import { Metadata } from 'next';
import DarkModeContext from '@/context/DarkModeContext';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Sungbeen's Blog",
    template: "Sungbeen's Blog | %s",
  },
  description: "Sofrware Engineer Sungbeen's Blog",
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
      <DarkModeContext>
        <body className='mx-auto flex w-full max-w-screen-2xl flex-col bg-white dark:bg-black'>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </body>
      </DarkModeContext>
    </html>
  );
}
