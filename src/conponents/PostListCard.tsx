import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };
export default function PostListCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='mb-2 flex w-full flex-col overflow-hidden shadow-md duration-300 ease-in-out hover:shadow-xl sm:mb-0 sm:flex-row'>
        <Image
          className='w-full sm:w-1/3'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          style={{ objectFit: 'cover' }}
        />
        <div className='flex w-full flex-col justify-between p-4'>
          <div>
            <h3 className='text-xl font-bold subpixel-antialiased'>{title}</h3>
          </div>
          <p className='mb-5 w-full truncate'>{description}</p>
          <div className='flex flex-col'>
            <span className='mb-2 text-sm text-blue-400'>{`# ${category}`}</span>
            <time className='text-sm text-gray-400'>{date.toString()}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
