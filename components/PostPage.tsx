import { MarkdownViewer } from '@/components/Markdown';
import { Post } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import { FC } from 'react';
import PostCRUDComponent from './PostCRUD';
import Text from './common/Text';
const PostPage: FC<Post> = ({
    id,
    title,
    category,
    tags,
    content,
    created_at,
    preview_image_url,
}) => {
    return (
        <div className="container flex flex-col gap-8 pb-40 pt-20 bg">
            <Text size="4xl" weight="bold">
                {title}
            </Text>
            <div className="flex flex-row items-center gap-2">
                <Text
                    link={`/categories/${category}`}
                    className="rounded-md bg-slate-800 px-2 py-1 "
                    color="white"
                    size="sm"
                >
                    {category}
                </Text>

                {tags.map((tag) => (
                    <Text
                        link={`/tags/${tag}`}
                        key={tag}
                        className="rounded-md bg-slate-200 px-2 py-1"
                        color="black"
                        size="sm"
                    >
                        {tag}
                    </Text>
                ))}
                <Text color="grey">
                    {format(new Date(created_at), 'yyyy년 M월 d일 HH:mm')}
                </Text>
                <PostCRUDComponent id={id + ''} />
            </div>
            {preview_image_url && (
                <Image
                    src={preview_image_url}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={title}
                    className="h-auto w-full"
                />
            )}
            <MarkdownViewer source={content} className="min-w-full" />
        </div>
    );
};

export default PostPage;
