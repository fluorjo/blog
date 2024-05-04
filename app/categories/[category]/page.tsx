import PostList from '@/components/PostList';
import { getCategories, getPosts } from '@/utils/fetch';
import { Metadata } from 'next';

type CategoryPageProps = {
  params: { category: string };
};

export const generateMetadata = ({ params }: CategoryPageProps): Metadata => {
  return {
    title: `fluorjo - ${decodeURIComponent(params.category)}`,
    description: 'fluorjo의 블로그',
  };
};

export const generateStaticParams = async () => {
  const categories = await getCategories();
  return categories.map((category) => ({ category }));
};

export default async function CategoryPosts({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(params.category);
  const posts = await getPosts({ category });

  return (
    <PostList category={decodeURIComponent(category)} initialPosts={posts} />
  );
}