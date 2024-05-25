'use client';
import IconButton from './common/IconButton';
import { BsFillShareFill, BsPencilFill, BsTrash } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
interface EditAndDeleteButtonProps {
    id: string;
}

export default function EditAndDeleteButton({id}:EditAndDeleteButtonProps) {
    const router = useRouter();

    return (
        <>
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
                    }),
                        router.push('/');
                }}
            />
        </>
    );
}
