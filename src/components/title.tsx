import type { PropsWithChildren } from 'react';

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="max-w-3xl text-pretty font-semibold text-2xl text-slate-800 md:text-4xl lg:text-6xl">
      {props.children}
    </h1>
  );
}
