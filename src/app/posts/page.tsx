import FilterablePosts from '@/conponents/FilterablePosts';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: "Vincent's Blog Posts",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
