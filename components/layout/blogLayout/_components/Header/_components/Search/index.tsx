'use client';

import classNames from 'classnames';
import { useState } from 'react';

export default function SearchComponent() {
    const [search, setSearch] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="mx-auto max-w-md relative">
            <form action="" className="relative mx-auto w-max">
                <input
                    type="search"
                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-primary focus:pl-16 focus:pr-4"
                    value={search}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onClick={() => setIsFocused(true)}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-primary px-3.5  peer-focus:border-primary peer-focus:stroke-primary
            
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
            <div
                className={classNames(
                    'w-full border border-red-300 h-48 absolute bg-primary-content my-2 rounded-md',
                    { hidden: !isFocused },
                )}
            >

            </div>
        </div>
    );
}
