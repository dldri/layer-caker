import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { POST_QUERY } from '@/sanity/lib/queries';
import { components } from '@/sanity/portable-text-components';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ? (
        <Image
          alt={post?.mainImage?.alt || ''}
          className="aspect-[800/300] w-full"
          height="300"
          src={urlFor(post.mainImage)
            .width(800)
            .height(300)
            .quality(80)
            .auto('format')
            .url()}
          width="800"
        />
      ) : null}
      <h1 className="text-balance font-bold text-4xl">{post?.title}</h1>
      {post?.body ? (
        <div className="prose">
          <PortableText components={components} value={post.body} />
        </div>
      ) : null}
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
