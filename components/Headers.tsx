'use client';

import { FC } from 'react';
// import IconButton from './IconButton';
import { HiBars3 } from 'react-icons/hi2';
import { useSidebar } from './Providers';

const Header: FC = () => {
    const { isOpen, setIsOpen } = useSidebar();
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="">
                    <button
                        className="btn btn-square btn-ghost"
                        role="button"
                        tabIndex={0}
                        onClick={() => setIsOpen((t) => !t)}
                    >
                        <HiBars3 className="size-6" />
                    </button>
                </div>
            </div>
            <div className="navbar-center">
                Text?
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
                </div>
            </div>
            <div className="navbar-end">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Header;
