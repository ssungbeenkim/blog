import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.png';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of author'
        width={250}
        height={250}
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Vincent"}</h2>
      <h3 className='text-xl font-semibold'>Softwear Engineer</h3>
      <p>Man in the mirror</p>
      <Link href='/contact'>
        <button className='bg-sky-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
