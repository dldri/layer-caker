import { PostCard } from '@/components/post-card';
import { Title } from '@/components/title';
import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <div className="">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
