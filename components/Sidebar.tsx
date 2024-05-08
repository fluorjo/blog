'use client';
import { useCategories } from '@/utils/hooks';
import { cn } from '@/utils/style';
import Link from 'next/link';
import { FC } from 'react';
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import IconButton from './IconButton';
import { useSidebar } from './Providers';

const Sidebar: FC = () => {
    const { isOpen, setIsOpen } = useSidebar();

    const { data: existingCategories } = useCategories();
    return (
        <div
            className={cn(
                'absolute z-10 min-h-screen flex-col gap-6 border-r  pl-10 pr-6 text-base lg:relative bg-white w-36 pt-14',
                isOpen ? 'flex' : 'hidden',
            )}
        >
            <div className={'flex justify-end lg:hidden'}>
                <IconButton
                    Icon={AiOutlineClose}
                    onClick={() => setIsOpen(false)}
                    label="sidebarClose"
                />
            </div>
            <Link
                href={'/'}
                className="w-48 font-medium text-gray-600 hover:underline"
            >
                HOME
            </Link>
            <Link
                href={'/tags'}
                className="w-48 font-medium text-gray-600 hover:underline"
            >
                TAG
            </Link>
            {existingCategories?.map((category) => (
                <Link
                    key={category}
                    href={`/categories/${category}`}
                    className="w-48 font-medium text-gray-600 hover:underline"
                >
                    {category}
                </Link>
            ))}
            <div className="mt-10 flex items-center gap-4 flex-col ">
                <IconButton
                    Icon={AiFillGithub}
                    component={Link}
                    label="githubLink"
                    href={'https://github.com/fluorjo'}
                    target="_blank"
                />
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ffluorjo.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"
                    alt="방문자 뱃지"
                />
            </div>
        </div>
    );
};

export default Sidebar;
