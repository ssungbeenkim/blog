import AdjacentPostCard from '@/conponents/AdjacentPostCard';
import PostContent from '@/conponents/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  return (
    <article className='m-4 overflow-hidden rounded-2xl bg-gray-200 shadow-lg'>
      <Image
        className='max-h-80 w-full object-cover'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  );
}
