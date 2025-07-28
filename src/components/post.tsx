import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { Author } from '@/components/author';
import { Categories } from '@/components/categories';
import { PublishedAt } from '@/components/published-at';
import { Title } from '@/components/title';
import { urlFor } from '@/sanity/lib/image';
import { components } from '@/sanity/portable-text-components';
import type { POST_QUERYResult } from '@/sanity/types';

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid gap-y-12 lg:grid-cols-12">
      <header className="flex flex-col items-start gap-4 lg:col-span-12">
        <div className="flex items-center gap-4">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="flex flex-col items-start gap-2 lg:col-span-4">
          <Image
            alt=""
            height={400}
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
          />
        </figure>
      ) : null}
      {body ? (
        <div className="prose lg:prose-lg lg:col-span-7 lg:col-start-6">
          <PortableText components={components} value={body} />
        </div>
      ) : null}
    </article>
  );
}
