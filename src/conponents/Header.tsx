import Link from 'next/link';
import ThemeButton from './ThemeButton';
import NavbarMenu from './NavbarMenu';

export default function Header() {
  return (
    <header className='mx-4 flex flex-col items-start justify-between pt-4 sm:flex-row'>
      <Link href='/'>
        <h1 className='text-xl font-bold sm:text-xl md:text-2xl'>{`SUNGBEEN KIM`}</h1>
      </Link>
      <nav className='mt-2 flex justify-between gap-7 sm:mt-0'>
        <NavbarMenu />
        <ThemeButton />
      </nav>
    </header>
  );
}
