import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/conponents/Header';
import Footer from '@/conponents/Footer';
import { Metadata } from 'next';
import DarkModeContext from '@/context/DarkModeContext';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

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
    <html lang='en' className={roboto.className}>
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
