import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

import EditAndDeleteButton from './EditAndDeleteButton';
import PostShareButton from './PostShareButton';

interface PostCRUDComponentProps {
    id: string;
}

export default async function PostCRUDComponent({
    id,
}: PostCRUDComponentProps) {
    const supabase = createClient(cookies());
    const userResponse = await supabase.auth.getUser();

    return (
        <div className="flex flex-row  gap-x-2">
            <PostShareButton />
            {!!userResponse?.data.user ? <EditAndDeleteButton id={id} /> : null}
        </div>
    );
}
