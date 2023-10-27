import CarouselPosts from '@/conponents/CarouselPosts';
import FeaturedPosts from '@/conponents/FeaturedPosts';
import Hero from '@/conponents/Hero';

export default function HomePage() {
  return (
    <section className='mx-auto max-w-screen-2xl'>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </section>
  );
}
