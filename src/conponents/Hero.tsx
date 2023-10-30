import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.png';

export default function Hero() {
  return (
    <section className='mt-9 text-center'>
      <Image
        className='mx-auto'
        src={profileImage}
        alt='Picture of author'
        width={250}
      />
      <h2 className='my-2 mt-4 text-3xl font-bold'>{"Hi, I'm Sungbeen"}</h2>
      <p>
        Software Engineer based in S.Korea <br />
        Focusing on MERN w/ Typescript <br />
        Interested in UX﹒Testing﹒FE
      </p>
      <Link href='/contact'>
        <button className='my-4 rounded-sm bg-blue-500 px-4 py-1 font-bold hover:bg-blue-300'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
