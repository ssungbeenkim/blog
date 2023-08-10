import MarkdownViewer from '@/conponents/MarkdownViewer';
import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
}
