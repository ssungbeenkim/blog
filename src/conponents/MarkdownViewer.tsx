'use client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div>
      <ReactMarkdown
        className='prose max-w-none lg:prose-xl'
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={materialDark}
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
              className='max-h-60 w-full object-cover'
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
