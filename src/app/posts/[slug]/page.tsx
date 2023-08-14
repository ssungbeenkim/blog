import AdjacentPostCard from '@/conponents/AdjacentPostCard';
import PostContent from '@/conponents/PostContent';
import { getAllPosts, getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
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

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
