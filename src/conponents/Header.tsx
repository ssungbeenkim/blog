import Link from 'next/link';
import ThemeButton from './ThemeButton';
import NavbarMenu from './NavbarMenu';

export default function Header() {
  return (
    <header className='flex items-center justify-between p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>{`SUNGBEEN KIM`}</h1>
      </Link>
      <nav className='flex gap-4'>
        <NavbarMenu />
        <ThemeButton />
      </nav>
    </header>
  );
}
