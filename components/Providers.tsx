'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';

const SidebarContext = createContext<{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
    isOpen: true,
    setIsOpen: () => {},
});
const PostListContext = createContext<{
    isGrid: boolean;
    setIsGrid: Dispatch<SetStateAction<boolean>>;
}>({
    isGrid: true,
    setIsGrid: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isGrid, setIsGrid] = useState(true);

    const [queryClient] = useState(() => new QueryClient());

    const sidebarContextValue = useMemo(
        () => ({ isOpen, setIsOpen }),
        [isOpen],
    );
    const postListContextValue = useMemo(
        () => ({ isGrid, setIsGrid }),
        [isGrid],
    );

    return (
        <QueryClientProvider client={queryClient}>
            <SidebarContext.Provider value={sidebarContextValue}>
                <PostListContext.Provider value={postListContextValue}>
                    {children}
                </PostListContext.Provider>
            </SidebarContext.Provider>
        </QueryClientProvider>
    );
};

export default Providers;

export const useSidebar = () => useContext(SidebarContext);
export const usePostList = () => useContext(PostListContext);
