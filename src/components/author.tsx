import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { POST_QUERYResult } from '@/sanity/types';

type AuthorProps = {
  author: NonNullable<POST_QUERYResult>['author'];
};

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">
      {author?.image ? (
        <Image
          alt={author.name || ''}
          className="size-10 rounded-full bg-pink-50 shadow-inner"
          height={80}
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
        />
      ) : null}
      {author?.name ? (
        <p className="text-base text-slate-700">{author.name}</p>
      ) : null}
    </div>
  ) : null;
}
