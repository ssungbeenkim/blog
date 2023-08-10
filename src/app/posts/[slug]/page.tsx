import MarkdownViewer from '@/conponents/MarkdownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article>
      <Image
        src={`/image/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section>
        <h1>{title}</h1>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
