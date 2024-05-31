'use client'
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import Toast from './common/Toast';
import IconButton from './common/IconButton';
import { BsFillShareFill, BsPencilFill, BsTrash } from 'react-icons/bs';
export default function PostShareButton() {
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
        <>
            <IconButton
                Icon={BsFillShareFill}
                label="editPost"
                onClick={copyToClipboard}
            />
            <Toast />
        </>
    );
}
