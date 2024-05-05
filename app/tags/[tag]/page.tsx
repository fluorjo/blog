import PostList from '@/components/PostList';
import { getPosts, getTags } from '@/utils/fetch';
import { Metadata } from 'next';

type TagPageProps = {
    params: { tag: string };
};

export const generateMetadata = ({ params }: TagPageProps): Metadata => {
    return {
        title: `Fluorjo - #${decodeURIComponent(params.tag)}`,
        description: 'Fluorjo',
    };
};

export const generateStaticParams = async () => {
    const tags = await getTags();
    return tags.map((tag) => ({ tag }));
};

export default async function TagPosts({
    params,
}: {
    params: { tag: string };
}) {
    const tag = decodeURIComponent(params.tag);
    const posts = await getPosts({ tag });

    return <PostList tag={tag} initialPosts={posts} />;
}
