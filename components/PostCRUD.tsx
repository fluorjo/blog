'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsFillShareFill, BsPencilFill, BsTrash } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from './common/IconButton';
import Toast from './common/Toast';
interface PostCRUDComponentProps {
    id: string;
}

export default function PostCRUDComponent({ id }: PostCRUDComponentProps) {
    const router = useRouter();
    const notify = () => toast('포스트 주소가 복사되었습니다.');

    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard
            .writeText(url)
            .then(notify)
            .catch((err) => {
                console.error(
                    '클립보드에 주소를 복사하는 동안 오류가 발생했습니다:',
                    err,
                );
            });
    };
    return (
        <div className="flex flex-row  gap-x-2">
            <IconButton
                Icon={BsFillShareFill}
                label="editPost"
                onClick={copyToClipboard}
            />
            <Toast />
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
        </div>
    );
}
