import type { POST_QUERYResult } from '@/sanity/types';

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>['categories'];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      className="whitespace-nowrap rounded-full bg-cyan-50 px-2 py-1 font-semibold text-cyan-700 text-sm leading-none"
      key={category._id}
    >
      {category.title}
    </span>
  ));
}
