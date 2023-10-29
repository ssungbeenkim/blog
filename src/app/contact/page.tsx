import ContactForm from '@/conponents/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiKakaotalk } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send mail to me',
};

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/ssungbeenkim',
    size: 'text-[2.7rem]',
  },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/sungbeen-kim-60b859292/',
    size: 'text-5xl',
  },
  {
    icon: <SiKakaotalk />,
    url: 'https://open.kakao.com/o/sXhHdkPf',
    size: 'text-[2.4rem]',
  },
];

export default function ContactPage() {
  return (
    <section className='mt-10 flex flex-col items-center'>
      <h2 className='my-2 text-2xl font-bold'>Contact Me</h2>
      <p>sungbeenissungbeen@gmail.com</p>
      <ul className='mt-3 flex items-center gap-5'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrel'
            className={`${link.size} transition duration-300 ease-in-out hover:text-blue-500`}
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='mt-3 text-lg font-bold'>{`Or Send me an email 😀`}</h2>
      <ContactForm />
    </section>
  );
}
