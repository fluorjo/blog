'use client';

import { useSidebar } from '@/components/Providers';
import IconButton from '@/components/common/IconButton';
import { HiBars3 } from 'react-icons/hi2';

import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import SearchComponent from './_components/Search';
import "react-toastify/ReactToastify.css";

const Header: FC = () => {
    const { isOpen, setIsOpen } = useSidebar();
    const router = useRouter();


    return (
        <div className="navbar pl-8 bg-base-300 ">
            <div className="navbar-start flex flex-row ">
                {!isOpen ? (
                    <IconButton
                        Icon={HiBars3}
                        label="sideBarOpen"
                        className="fixed top-4 left-12"
                        onClick={() => setIsOpen((t) => !t)}
                    />
                ) : null}
                <IconButton
                    Icon={MdArrowBackIos}
                    label="sideBarOpen"
                    className="fixed top-4 left-40"
                    onClick={() => router.back()}
                />
            </div>
            <div className="navbar-center ">
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
                <SearchComponent />
            </div>
        </div>
    );
};

export default Header;
