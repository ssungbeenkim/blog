'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import ToggleButton from './ui/ToggleButton';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        title='toggleTheme'
        className='mr-2 flex h-5 w-10 items-center rounded-full bg-blue-200 shadow transition duration-300 focus:outline-none dark:bg-white sm:mr-0'
      >
        <div className='-translate-3/4 relative h-6  w-6 transform rounded-full bg-blue-500 p-1 text-white transition duration-500'></div>
      </button>
    );
  }
  return (
    <>
      <button // TODO:Refactoring with layout shift
        onClick={() => {
          setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        }}
      >
        <ToggleButton isDark={currentTheme === 'dark' ? true : false} />
      </button>
    </>
  );
}
