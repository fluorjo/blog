'use client';
import Link from 'next/link';
import { BsPencilFill, BsTrash } from 'react-icons/bs';
import IconButton from './common/IconButton';
import { useRouter } from 'next/navigation';

interface PostCRUDComponentProps {
    id: string;
}

export default function PostCRUDComponent({ id }: PostCRUDComponentProps) {
    const router = useRouter();

    return (
        <div className="flex flex-row  gap-x-2">
            <IconButton
                Icon={BsPencilFill}
                component={Link}
                label="editPost"
                href={`${id}/edit`}
            />
            <IconButton
                Icon={BsTrash}
                label="deletePost"
                onClick={() => {
                    fetch(`/api/posts/${id}`, {
                        method: 'DELETE',
                    }),        router.push('/');   
                    ;
                }}
            />
        </div>
    );
}
