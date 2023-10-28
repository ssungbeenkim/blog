import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className='my-8'>
      <h2 className='mb-2 text-lg font-bold sm:mb-4 sm:text-xl'>
        You May Like
      </h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
