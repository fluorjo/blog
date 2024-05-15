import { FC } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { IoLogoGithub } from 'react-icons/io';

import IconButton from '@/components/IconButton';
import Link from 'next/link';

const Footer: FC = () => {
    return (
        <footer className="footer items-center p-4 px-8 bg-primary text-primary-content flex justify-between">
            <aside className="items-center grid-flow-col">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="pr-1 text-sm lg:pr-2 lg:text-base">
                        ABOUT ME
                    </div>
                </div>
                <IconButton
                    Icon={IoLogoGithub}
                    component={Link}
                    label="githubLink"
                    href="http://www.github.com/fluorjo"
                    className={'text-base-300 hover:text-gray-600'}
                />
            </aside>

            <div className="flex items-center gap-2 lg:gap-3 ">
                <div className="pr-1 text-sm lg:pr-2 lg:text-base">ADMIN</div>
                <IconButton
                    Icon={AiOutlineSetting}
                    component={Link}
                    label="adminLink"
                    href="/admin"
                    className={'text-base-300 hover:text-gray-600'}
                />
                <IconButton
                    Icon={BsPencilSquare}
                    component={Link}
                    label="writeLink"
                    href="/write"
                    className={'text-base-300 hover:text-gray-600'}
                />
            </div>
        </footer>
    );
};

export default Footer;
