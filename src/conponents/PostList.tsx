import { Post } from '@/service/posts';
import PostListCard from './PostListCard';

type Props = { posts: Post[] };

export default function PostsList({ posts }: Props) {
  return (
    <ul className='flex flex-col'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostListCard post={post} />
        </li>
      ))}
    </ul>
  );
}
