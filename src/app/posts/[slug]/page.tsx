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
  const { title, path } = post;
  return (
    <article className='m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg'>
      <Image
        className='max-h-80 w-full object-cover'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}
