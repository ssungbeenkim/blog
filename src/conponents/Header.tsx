import Link from 'next/link';
import ThemeButton from './ThemeButton';
import NavbarMenu from './NavbarMenu';

export default function Header() {
  return (
    <header className='mx-4 flex flex-col items-start justify-between py-2 sm:flex-row sm:pt-4'>
      <Link href='/'>
        <h1 className='text-xl font-bold sm:text-xl md:text-2xl'>{`성빈킴 블로그`}</h1>
      </Link>
      <nav className='mt-2 flex w-full justify-between gap-7 sm:mt-0 sm:w-fit'>
        <NavbarMenu />
        <ThemeButton />
      </nav>
    </header>
  );
}
