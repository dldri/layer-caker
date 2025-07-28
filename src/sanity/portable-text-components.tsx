import Image from 'next/image';
import type { PortableTextComponents } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          alt={props?.value?.alt || ''}
          className="not-prose h-auto w-full rounded-lg"
          height="400"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto('format')
            .url()}
          width="600"
        />
      ) : null,
  },
};
