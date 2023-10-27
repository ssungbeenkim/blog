import { MdDarkMode, MdLightMode } from 'react-icons/md';

type Props = {
  isDark: boolean;
};

export default function ToggleButton({ isDark }: Props) {
  return (
    <div>
      <button
        title='toggleTheme'
        className='mr-2 flex h-5 w-10 items-center rounded-full bg-blue-200 shadow transition duration-200 focus:outline-none dark:bg-white sm:mr-0'
      >
        <div className='-translate-3/4 relative h-6 w-6 transform rounded-full bg-blue-500 p-1 text-white transition duration-500 dark:translate-x-3/4'>
          {isDark ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </button>
    </div>
  );
}
