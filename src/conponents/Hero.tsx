import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.png';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='mx-auto rounded-full'
        src={profileImage}
        alt='Picture of author'
        width={250}
        height={250}
      />
      <h2 className='mt-2 text-3xl font-bold'>{"Hi, I'm Vincent"}</h2>
      {/* <h3 className='text-xl font-semibold'>Softwear Engineer</h3> */}
      <p>
        Software Engineer based in S.Korea <br />
        Focusing on MERN w/ Typescript <br />
        Interested in UX﹒Testing﹒FE
      </p>
      <Link href='/contact'>
        <button className='mt-2 rounded-xl bg-sky-500 py-1 px-4 font-bold'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
