import { PostData } from '@/service/posts';
import MarkdownViewer from './MarkdownViewer';
import { BsFillCalendarDateFill } from 'react-icons/bs';

export default function PostContent({ post }: { post: PostData }) {
  const { title, date, content } = post;
  return (
    <section className='mb-4 flex flex-col py-2 '>
      <div className='flex justify-between'>
        <div>
          <h1 className='mt-3 px-1 text-xl font-bold sm:text-3xl'>{title}</h1>
          <div className='mb-8  border-2 border-blue-500 sm:w-full'></div>
        </div>
        <div className='mt-3 flex text-xs text-gray-500 sm:text-sm'>
          <BsFillCalendarDateFill />
          <p className='ml-2 font-semibold'>{date.toString()}</p>
        </div>
      </div>
      <MarkdownViewer content={content} />
    </section>
  );
}
