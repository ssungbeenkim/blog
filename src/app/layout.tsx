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
  description: "Sungbeen's Blog",
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
        <body className='mx-auto flex w-full flex-col items-center bg-neutral-50 dark:bg-neutral-800'>
          <section className='w-full max-w-screen-lg'>
            <Header />
            <main className='mx-4 grow'>{children}</main>
            {/* <Footer /> */}
          </section>
        </body>
      </DarkModeContext>
    </html>
  );
}
