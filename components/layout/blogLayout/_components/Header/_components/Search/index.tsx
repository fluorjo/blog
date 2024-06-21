'use client';

import { addRecentKeyword } from '@/utils/localstorage';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import AutoComplete from './_components/AutoComplete';
import Recents from './_components/Recents';

export default function SearchComponent() {
    const [search, setSearch] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="mx-auto max-w-md relative ">
            <form
                action=""
                className="relative mx-auto w-max"
                onSubmit={(e) => {
                    e.preventDefault();
                    // 최근 검색어 추가
                    addRecentKeyword(search);
                }}
            >
                <input
                    type="search"
                    className="peer cursor-pointer relative z-10 h-12 w-full rounded-full border bg-transparent pl-12  outline-none focus:cursor-text border-gray-400 focus:border-primary truncate"
                    value={search}
                    onFocus={() => setIsFocused(true)}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-400 px-3.5   peer-focus:stroke-primary
            
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
            {isFocused ? (
                <div
                    ref={containerRef}
                    className={classNames(
                        'w-full border border-base-300 h-52 absolute bg-primary-content my-2 rounded-md z-10',
                    )}
                >
                    {!search ? (
                        <Recents handleClose={() => setIsFocused(false)} />
                    ) : (
                        <AutoComplete
                            handleClose={() => setIsFocused(false)}
                            query={search}
                        />
                    )}
                </div>
            ) : null}
        </div>
    );
}
