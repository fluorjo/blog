'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsFillShareFill, BsPencilFill, BsTrash } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from './common/IconButton';
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
            <ToastContainer
                position="top-right" // 알람 위치 지정
                autoClose={2000} // 자동 off 시간
                hideProgressBar={true} // 진행시간바 숨김
                closeOnClick // 클릭으로 알람 닫기
                rtl={false} // 알림 좌우 반전
                pauseOnFocusLoss // 화면을 벗어나면 알람 정지
                draggable // 드래그 가능
                pauseOnHover // 마우스를 올리면 알람 정지
                theme="light"
                // limit={1} // 알람 개수 제한
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
                    }),
                        router.push('/');
                }}
            />
        </div>
    );
}
