import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};
const ICON_CLASS =
  'm-4 text-2xl sm:text-3xl transition-all m-4 transition-all group-hover:text-4xl hidden sm:block';

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className='group relative max-h-56 w-full bg-black'
    >
      <Image
        className='w-full opacity-40'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-0 text-white sm:px-8'>
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS} />}
        <div className='w-full text-center'>
          <h3 className='mx-2 text-sm font-bold sm:text-xl'>{title}</h3>
          <p className='hidden truncate sm:block'>{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
