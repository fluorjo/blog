'use client'
import { getTags } from '@/utils/fetch';
import { useTags } from '@/utils/hooks';
import Link from 'next/link';

export default function Tag() {
    const { data: tags, isLoading, isError } = useTags();
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching tags</div>;

    return (
        <div className="flex flex-col items-center gap-2 px-4 pb-24 pt-20">
            <h1 className="mb-8 text-center text-2xl font-semibold">태그</h1>
            <div className="container flex flex-wrap justify-center gap-2">
                {tags?.map((tag) => (
                    <Link
                        href={`/tags/${tag}`}
                        key={tag}
                        className="text-xl text-gray-500 underline hover:text-gray-700"
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}
