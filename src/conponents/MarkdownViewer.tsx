'use client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div>
      <ReactMarkdown
        className='prose-base max-w-none sm:prose-lg'
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={oneDark}
                language={match[1]}
                PreTag='div'
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          img: (image) => (
            <Image
              className='mx-auto my-2 rounded-md object-cover shadow-md sm:w-11/12'
              src={image.src || ''}
              alt={image.alt || ''}
              width={500}
              height={350}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
