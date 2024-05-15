'use client';
import { useSidebar } from '@/components/Providers';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import { useCategories } from '@/utils/hooks';
import { cn } from '@/utils/style';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io';

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
            <Text link="/">HOME</Text>
            <Text link="/tags">TAG</Text>

            {existingCategories?.map((category) => (
                <Text key={category} link={`/categories/${category}`}>
                    {category}
                </Text>
            ))}
            <div className="mt-10 flex items-center gap-4 flex-col ">
                <IconButton
                    Icon={IoLogoGithub}
                    component={Link}
                    label="githubLink"
                    href="http://www.github.com/fluorjo"
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
