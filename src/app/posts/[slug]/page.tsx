import MarkdownViewer from '@/conponents/MarkdownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import { BsFillCalendarDateFill } from 'react-icons/bs';
type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className='m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg'>
      <Image
        className='h-7/1 w-full object-cover'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className='flex flex-col'>
        <div className='flex items-center self-end text-gray-500'>
          <BsFillCalendarDateFill />
          <p className='ml-2 font-semibold'>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='mt-4 mb-8 w-44 border-2 border-sky-600'></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
