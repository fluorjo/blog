import { createClient } from '@/utils/supabase/server';
import { GetServerSideProps } from 'next';

type PostProps = {
    id: string;
};

export default function Post({ id }: PostProps) {
    return (
        <div>
            <h1>dddddddd</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({
    query,
    req,
}) => {
    const { id } = query;

    const supabase = createClient(req.cookies);

    const response = await supabase.from('Post').select('*');
    return {
        props: {
            id,
        },
    };
};
