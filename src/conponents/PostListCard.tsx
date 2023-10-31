import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };
export default function PostListCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='duration-200/30 mb-2 flex h-full w-full flex-col overflow-hidden rounded-md shadow-md duration-300 ease-in-out dark:border-2 dark:border-neutral-700  dark:bg-neutral-800 dark:shadow-none sm:mb-0 sm:flex-row sm:hover:shadow-xl sm:dark:hover:border-blue-200/90'>
        <Image
          className='h-full w-full sm:w-1/3'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          style={{ objectFit: 'cover' }}
        />
        <div className='flex w-full flex-col justify-between p-2'>
          <div>
            <h3 className='text-base font-bold subpixel-antialiased sm:text-lg'>
              {title}
            </h3>
            <p className='w-full truncate text-sm sm:mb-5 sm:text-base'>
              {description}
            </p>
          </div>
          <div className='flex flex-col'>
            <span className=' text-sm text-blue-400'>{`#${category}`}</span>
            <time className='text-sm text-gray-400'>{date.toString()}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
