import Hero from '@/conponents/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Me and My Career',
};

const TITLE_CLASS = 'texxt-2xl my-2 font-bold text-gray-800';
export default function AboutPage() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <Hero />
      <div className='mt-8 flex flex-col items-center'>
        <p className='bold text-xl'>현재 구직중입니다!</p>
        <a
          href='https://sungbeenkim-resume.vercel.app/'
          target='_blank'
          rel='noreferrel'
          className='bold mt-8 rounded-md bg-slate-500 p-2 text-lg text-white transition duration-300 ease-in-out hover:bg-neutral-700'
        >
          이력서 보러가기 📄
        </a>
      </div>
      {/* <section className='m-8 bg-gray-100 p-8 text-center shadow-lg dark:bg-gray-400 dark:text-black'>
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>Let's figure out!</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>Let's get it!</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          I can cook, I can clean, I can code, I can do anything you want me to
        </p>
      </section> */}
    </section>
  );
}
