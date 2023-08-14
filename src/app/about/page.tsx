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
        <p>
          I am a software engineer with a passion for building things. I have
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          Google (-Now) <br />
          Meta (-2020)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          Next.js, React, TypeScript <br />
          Node.js, Express, MongoDB
        </p>
      </section>
    </>
  );
}
