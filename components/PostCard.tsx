import Text from '@/components/common/Text';
import { Post } from '@/types';
import { cn } from '@/utils/style';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { usePostList } from './Providers';

export type PostCardProps = Omit<Post, 'tags'> & {
    className?: string;
};

const PostCard: FC<PostCardProps> = ({
    id,
    title,
    content,
    preview_image_url,
    className,
    created_at,
}) => {
    const { isGrid, setIsGrid } = usePostList();

    return (
        <>
            {isGrid ? (
                <Link
                    href={`/posts/${id}`}
                    className={cn('bg-white', className)}
                >
                    <div className="relative aspect-[1.8/1] w-full">
                        <Image
                            src={preview_image_url ?? '/vector.png'}
                            fill
                            sizes="360px"
                            alt={title}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="p-2">
                        <Text size="xl" color="black" weight="bold">
                            {title}
                        </Text>
                        <Text size="md" color="grey" className="line-clamp-3 ">
                            {content}
                        </Text>
                        <Text size="sm" color="grey" className='relative left-52'>
                            {format(
                                new Date(created_at),
                                'yyyy년 M월 d일 HH:mm',
                            )}
                        </Text>
                    </div>
                </Link>
            ) : (
                <Link
                    href={`/posts/${id}`}
                    className={cn('bg-white ', className)}
                >
                    {preview_image_url ? (
                        <div className="p-2 border border-gray-300 rounded-md flex flex-row">
                            <div className="flex flex-col w-[80%]">
                                <h2 className="text-lg font-medium">{title}</h2>
                                <p className="line-clamp-3 text-sm text-gray-500">
                                    {content}
                                </p>
                            </div>

                            <div className="relative aspect-[1.8/1] w-32">
                                <Image
                                    src={preview_image_url ?? '/vector.png'}
                                    fill
                                    sizes="360px"
                                    alt={title}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="p-2 border border-gray-300 rounded-md">
                            <h2 className="text-lg font-medium">{title}</h2>
                            <p className="line-clamp-3 text-sm text-gray-500">
                                {content}
                            </p>
                        </div>
                    )}
                </Link>
            )}
        </>
    );
};

export default PostCard;
