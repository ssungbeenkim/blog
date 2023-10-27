import ContactForm from '@/conponents/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send mail to me',
};

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/ssungbeenkim' },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/sungbeen-kim-60b859292/',
  },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='my-2 text-3xl font-bold'>Contact Me</h2>
      <p>sungbinissungbin@gmail.com</p>
      <ul className='my-2 flex gap-4'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrel'
            className='text-5xl transition duration-300 ease-in-out hover:text-blue-500'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='my-8 text-3xl font-bold'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
