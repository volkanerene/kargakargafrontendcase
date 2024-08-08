import React from 'react';
import {BellIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function TopBar() {
    return (
        <div className="h-16 pl-40 fixed bg-gradient-to-r bg-white w-full flex items-center justify-between pr-5">
            <div className="flex px-5 items-center">
            </div>
            <div className="flex space-x-6">
                <BellIcon className="w-7 h-7 text-gray"/>
                <BellIcon className="w-7 h-7 text-gray"/>
                <div className="flex items-center text-white">
                    <Image src="https://randomuser.me/api/portraits/men/75.jpg"
                        width="36" height="36" objectFit="cover"
                        className=" rounded-full "/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;