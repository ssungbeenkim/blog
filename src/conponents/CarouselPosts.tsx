import { getNonFeaturedPosts } from '@/service/posts';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return <></>;
}
