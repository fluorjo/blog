import Text from '@components/common/Text';
import { useState } from 'react';

type Props = {
    handleClose: () => void;
};

//검색어 개별 삭제도 나중에 하나
export default function Recents({ handleClose }: Props) {
    // const [recents, setRecents] = useState<string[]>([]);
    const [recents, setRecents] = useState([]);

    // useEffect(() => {
    //   const recents = getRecentKeywords()
    //   setRecents(recents)
    // }, [])
    return (
        <div className="flex flex-col h-full z-10">
            <div className="p-2 overflow-hidden flex-1">
                <div className="border-b border-primary pb-1 mb-2">
                    <Text size="sm" weight="bold">
                        최근 검색어
                    </Text>
                </div>
                {recents.length === 0 ? (
                    <div className="h-full flex justify-center pt-4 ">
                        <Text color="grey" size="sm">
                            최근 검색어가 없습니다
                        </Text>
                    </div>
                ) : (
                    <div className="h-full overflow-scroll pb-8">
                        {recents.map((recent, idx) => (
                            <Text size="sm" key={idx} className="block my-1">
                                {recent}
                            </Text>
                        ))}
                    </div>
                )}
            </div>
            <div className="bg-base-300 flex justify-between px-2 py-1 ">
                <Text size="sm" weight="bold" className="hover:cursor-pointer">
                    검색어 전체 삭제
                </Text>
                <Text
                    size="sm"
                    weight="bold"
                    onClick={handleClose}
                    className="hover:cursor-pointer"
                >
                    닫기
                </Text>{' '}
            </div>
        </div>
    );
}
