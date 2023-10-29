'use client';

import Link from 'next/link';
import { useState } from 'react';

const menu = [
  { title: 'HOME', path: '/' },
  { title: 'POSTS', path: '/posts' },
  { title: 'ABOUT', path: '/about' },
  { title: 'CONTACT', path: '/contact' },
];

export default function NavbarMenu() {
  const [selected, setSelected] = useState('HOME');
  return (
    <>
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
    </>
  );
}
