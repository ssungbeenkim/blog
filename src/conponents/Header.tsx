'use client';
import Link from 'next/link';
import ThemeButton from './ThemeButton';
import { useState } from 'react';
const menu = [
  { title: 'HOME', path: '/' },
  { title: 'POSTS', path: '/posts' },
  { title: 'ABOUT', path: '/about' },
  { title: 'CONTACT', path: '/contact' },
];
export default function Header() {
  const [selected, setSelected] = useState('HOME');
  return (
    <header className='mx-4 flex flex-col items-start justify-between py-2 sm:flex-row sm:pt-4'>
      <Link href='/' onClick={() => setSelected('HOME')}>
        <h1 className='text-xl font-bold sm:text-xl md:text-2xl'>{`성빈킴 블로그`}</h1>
      </Link>
      <nav className='mt-2 flex w-full justify-between sm:mt-0 sm:w-fit sm:gap-7'>
        {menu.map(({ title, path }) => (
          <Link
            key={path}
            href={path}
            className={`text-sm font-bold transition-colors hover:text-blue-400 sm:text-base ${
              title === selected && 'text-blue-500'
            }`}
            onClick={() => setSelected(title)}
          >
            {title}
          </Link>
        ))}
        <ThemeButton />
      </nav>
    </header>
  );
}
