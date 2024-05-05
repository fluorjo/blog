import { cache } from 'react';
import { createClient as createBrowserClient } from './supabase/client';
import { createClient as createServerClient } from './supabase/server';

export const getPosts = cache(
    async ({
        category,
        tag,
        page = 0,
    }: {
        category?: string;
        tag?: string;
        page?: number;
    }) => {
        const supabase =
            typeof window === 'undefined'
                ? createServerClient()
                : createBrowserClient();

        let request = supabase.from('Post').select('*');

        if (category) request = request.eq('category', category);
        if (tag) request = request.like('tags', `%${tag}%`);

        const { data } = await request
            .order('created_at', { ascending: false })
            .range(page, page + 4);
        console.log(data);
        const modifiedData = data?.map((post) => ({
            ...post,
            tags: post.tags
                ? post.tags.split(',').map((tag) => tag.trim())
                : [],
        }));

        return modifiedData;
    },
);

export const getPost = cache(async (id: string) => {
    const supabase =
        typeof window === 'undefined'
            ? createServerClient()
            : createBrowserClient();

    const { data } = await supabase.from('Post').select('*').eq('id', id);
    console.log('data', data);
    if (!data) return null;

    // 태그를 깔끔하게 가져오도록 수정
    const modifiedData = {
        ...data[0],
        tags: data[0].tags ? JSON.parse(data[0].tags) : [],
    };
    return modifiedData;
});
export const getTags = cache(async () => {
    const supabase =
        typeof window === 'undefined'
            ? createServerClient()
            : createBrowserClient();
    const { data } = await supabase.from('Post').select('tags');
    console.log(data);
    const tagsArray = data?.flatMap((d) =>
        d.tags ? JSON.parse(d.tags) : [],
    ) as string[];
    console.log('tagsArray', tagsArray);
    return Array.from(new Set(tagsArray.map((tag) => tag.trim())));
});

export const getCategories = cache(async () => {
    const supabase =
        typeof window === 'undefined'
            ? createServerClient()
            : createBrowserClient();
    const { data } = await supabase.from('Post').select('category');
    return Array.from(new Set(data?.map((d) => d.category))) as string[];
});
