import CarouselPosts from '@/conponents/CarouselPosts';
import FeaturedPosts from '@/conponents/FeaturedPosts';
import Hero from '@/conponents/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* <CarouselPosts /> */}
    </>
  );
}
