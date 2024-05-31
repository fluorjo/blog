import Text from '@components/common/Text';

// 태그나 카테고리로 검색

type Props = {
    query: string;
    handleClose: () => void;
};

export default function AutoComplete({ query, handleClose }: Props) {
    const keywords = ['ddd'];

    // useEffect(() => {
    //   const recents = getRecentKeywords()
    //   setRecents(recents)
    // }, [])
    return (
        <div className="flex flex-col h-full z-10">
            <div className="p-2 overflow-hidden flex-1">
                <div className="border-b border-primary pb-1 mb-2">
                    <Text size="sm" weight="bold">
                        {query}
                    </Text>
                </div>
                {keywords.length === 0 ? (
                    <div className="h-full flex justify-center pt-4 ">
                        <Text color="grey" size="sm">
                            검색 결과가 없습니다.
                        </Text>
                    </div>
                ) : (
                    <div className="h-full overflow-scroll pb-8">
                        {keywords.map((keywords, idx) => (
                            <Text size="sm" key={idx} className="block my-1">
                                {keywords}
                            </Text>
                        ))}
                    </div>
                )}
            </div>
            <div className="bg-base-300 flex justify-between px-2 py-1 focus:cursor-pointer ">
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
