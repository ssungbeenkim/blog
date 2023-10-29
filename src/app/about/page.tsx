import Hero from '@/conponents/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Me and My Career',
};

const TITLE_CLASS = 'texxt-2xl my-2 font-bold text-gray-800';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='m-8 bg-gray-100 p-8 text-center shadow-lg'>
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>Let's figure out!</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>Let's get it!</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          I can cook, I can clean, I can code, I can do anything you want me to
        </p>
      </section>
    </>
  );
}
