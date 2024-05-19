'use client';
import Link from 'next/link';
import { BsPencilFill, BsTrash } from 'react-icons/bs';
import IconButton from './common/IconButton';

interface PostCRUDComponentProps {
    id: string;
}

export default function PostCRUDComponent({ id }: PostCRUDComponentProps) {
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
                    });
                }}
            />
        </div>
    );
}
