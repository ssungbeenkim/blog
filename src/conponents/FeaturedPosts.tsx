import { getFeaturedPosts } from '@/service/posts';
import PostsList from './PostList';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='my-2'>
      <h2 className='mb-2 text-lg font-bold sm:mb-4 sm:text-xl'>
        Featured Posts 🤗
      </h2>
      <PostsList posts={posts} />
    </section>
  );
}
