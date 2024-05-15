import { FC } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { IoLogoGithub } from 'react-icons/io';
import Text from '@/components/common/Text';
import Link from 'next/link';
import IconButton from '@/components/common/IconButton';
const Footer: FC = () => {
    return (
        <footer className="footer items-center p-4 px-8 bg-base-300 text-primary-content flex justify-between">
            <aside className="items-center grid-flow-col">
                {/* <div className="flex items-center gap-2 lg:gap-3">
                    <div className="pr-1 text-sm lg:pr-2 lg:text-base text-primary">
                        ABOUT ME
                    </div>
                </div> */}
                <Text link="/about">ABOUT ME</Text>
                <IconButton
                    Icon={IoLogoGithub}
                    component={Link}
                    label="githubLink"
                    href="http://www.github.com/fluorjo"
                />
            </aside>

            <div className="flex items-center gap-2 lg:gap-3 ">
                <IconButton
                    Icon={AiOutlineSetting}
                    component={Link}
                    label="adminLink"
                    href="/admin"
                />
                <IconButton
                    Icon={BsPencilSquare}
                    component={Link}
                    label="writeLink"
                    href="/write"
                />
            </div>
        </footer>
    );
};

export default Footer;
