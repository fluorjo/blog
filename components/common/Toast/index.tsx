import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";
interface Props {
    /**
     * 토스트의 크기를 지정합니다 (기본값: 'md')
     */
    size?: 'xs' | 'sm' | 'md';
}

/**
 * 토스트를 표시하기 위한 컴포넌트
 */
export default function Toast({ size = 'md' }: Props) {
    return (
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
    );
}
