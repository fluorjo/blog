'use client';
import Link from 'next/link';
import { BsPencilFill, BsTrash,BsFillShareFill } from 'react-icons/bs';
import IconButton from './common/IconButton';
import { useRouter } from 'next/navigation';
import { FaShareAlt } from "react-icons/fa";

interface PostCRUDComponentProps {
    id: string;
}

export default function PostCRUDComponent({ id }: PostCRUDComponentProps) {
    const router = useRouter();
    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            // 모달 등 간단한 알림으로 바꿀 수 없을까. 
          alert('포스트의 주소가 클립보드에 복사되었습니다.');
        }).catch((err) => {
          console.error('클립보드에 주소를 복사하는 동안 오류가 발생했습니다:', err);
        });
      };
    return (
        <div className="flex flex-row  gap-x-2">
            <IconButton
                Icon={BsFillShareFill}
                label="editPost"
                onClick={copyToClipboard}
            />
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
