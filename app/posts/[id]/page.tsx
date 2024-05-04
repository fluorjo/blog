import type { Post } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { GetServerSideProps } from 'next';

type PostProps = Post;

export default function Post({
    id,
    title,
    category,
    tags,
    content,
    created_at,
    preview_image_url,
}: PostProps) {
    return (
        <div>
            <h1>dddddddd</h1>
        </div>
    );
}

// export const getServerSideProps: GetServerSideProps = async ({
//     query,
//     req,
// }) => {
//     const { id } = query;

//     const supabase = createClient(req.cookies);
//     const { data } = await supabase
//         .from('Post')
//         .select('*')
//         .eq('id', Number(params?.id));
//     if (!data || !data[0]) return { notFound: true };

//     const response = await supabase.from('Post').select('*');
//     return {
//         props: {
//             id,
//         },
//     };
// };
