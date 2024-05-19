'use client';

import { useSidebar } from '@/components/Providers';
import IconButton from '@/components/common/IconButton';
import { FC } from 'react';
import { HiBars3 } from 'react-icons/hi2';

const Header: FC = () => {
    const { isOpen, setIsOpen } = useSidebar();
    return (
        <div className="navbar bg-base-100 pl-8">
            <div className="navbar-start">
                {!isOpen ? (
                    <IconButton
                        Icon={HiBars3}
                        label="sideBarOpen"
                        onClick={() => setIsOpen((t) => !t)}
                    />
                ) : null}
            </div>
            <div className="navbar-center">
                {/* Text?
                <div className="flex flex-row flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li>
                                        <a>Link 1</a>
                                    </li>
                                    <li>
                                        <a>Link 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className="navbar-end">
                <div className="mx-auto max-w-md">
                    <form action="" className="relative mx-auto w-max">
                        <input
                            type="search"
                            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-gray-500 focus:pl-16 focus:pr-4"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5  peer-focus:border-gray-500 peer-focus:stroke-gray-500
                            
                            "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;
