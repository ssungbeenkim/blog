import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='mb-2 flex h-full w-full flex-col overflow-hidden rounded-md shadow-md duration-300 ease-in-out hover:shadow-xl dark:border-2 dark:border-neutral-800 dark:shadow-none dark:hover:border-blue-200/90 sm:mb-0'>
        <Image
          className='h-full w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          style={{ objectFit: 'cover' }}
        />
        <div className='flex w-full flex-col justify-between p-2'>
          <div>
            <h3 className='truncate text-base font-bold sm:text-xl'>{title}</h3>
            <p className='w-full truncate text-sm sm:mb-2 sm:text-base'>
              {description}
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-xs text-blue-400 sm:text-sm'>{`#${category}`}</span>
            <time className='text-xs text-gray-400 sm:text-sm'>
              {date.toString()}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
