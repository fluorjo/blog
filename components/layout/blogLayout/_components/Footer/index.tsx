import { FC } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';

import Link from 'next/link';
import IconButton from '@/components/IconButton';

const Footer: FC = () => {
    return (
        <footer className="footer items-center p-4 px-8 bg-primary text-primary-content flex justify-between">
            <aside className="items-center grid-flow-col">
                <div className="flex items-center gap-2 lg:gap-3">
                    <div className="pr-1 text-sm lg:pr-2 lg:text-base">
                        ABOUT ME
                    </div>
                    {/* <div className="text-xs text-primary-content lg:text-sm">
                        fluorjo
                    </div> */}
                </div>
                <nav className=" gap-4 md:place-self-center md:justify-self-end  grid grid-flow-col ">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            id="github"
                            className="fill-current"
                        >
                            <path
                                fill="#ffffff"
                                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                            ></path>
                        </svg>
                    </a>

                    {/* <a className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a> */}
                </nav>
            </aside>

            <div className="flex items-center gap-2 lg:gap-3 ">
                <div className="pr-1 text-sm lg:pr-2 lg:text-base">ADMIN</div>
                 <IconButton
                    Icon={AiOutlineSetting}
                    component={Link}
                    label='adminLink'
                    href="/admin"
                    className={'text-gray-500 hover:text-gray-600'}
                />
                <IconButton
                    Icon={BsPencilSquare}
                    component={Link}
                    label='writeLink'
                    href="/write"
                    className={'text-gray-500 hover:text-gray-600'}
                /> 
                <AiOutlineSetting />
                <BsPencilSquare />
            </div>
        </footer>
    );
};

export default Footer;
