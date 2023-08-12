import { PostData } from '@/service/posts';
import MarkdownViewer from './MarkdownViewer';
import { BsFillCalendarDateFill } from 'react-icons/bs';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className='flex flex-col py-3'>
      <div className='flex items-center self-end text-gray-500'>
        <BsFillCalendarDateFill />
        <p className='ml-2 font-semibold'>{date.toString()}</p>
      </div>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{description}</p>
      <div className='mt-4 mb-8 w-44 border-2 border-sky-600'></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
