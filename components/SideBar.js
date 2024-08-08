import {React, useState} from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import { SiSimpleanalytics } from "react-icons/si";

const SideBar = () => {
const [dropdownOpen, setDropdownOpen] = useState(false);

    return (

        <div className="fixed inset-y-0 left-0 bg-white w-45">

            <h1 className="flex items-center justify-center text-2xl
            h-16  text-blue font-bold">kargakarga</h1>
            <hr class="h-px my-0 bg-gray-200 border-3 dark:bg-gray-700"></hr>
            <ul className="marker:text-green max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li className="flex items-center text-red-500 relative">
          
            <button
              
              className="text-black px-10 py-3 hover:bg-gray-600 flex items-center w-full justify-between"
                           
           >
            <GoDotFill color='red' className='mr-5'/>
              Proje İsim 1
              <FaChevronDown className="ml-2" />
            </button>

          </li>
          <li className="flex items-center text-green-500">
            <button className="text-black px-10 py-3 hover:bg-gray-600 flex items-center w-full justify-between">
            <GoDotFill color='blue' className='mr-5'/>
              Proje İsim 2
              <FaChevronDown className="ml-2" />
            </button>
          </li>
          <li className="flex items-center text-blue-500">
            <button className="text-black px-10 py-3 hover:bg-gray-600 flex items-center w-full justify-between">
            <GoDotFill color='orange' className='mr-5'/>
              Proje İsim 3
              <FaChevronDown className="ml-2" />
            </button>
          </li>
          <li className="flex flex-col text-yellow-500 relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-black px-10 py-3 hover:bg-gray-600 flex items-center w-full justify-between"
            >
              <GoDotFill color="purple" className="mr-5" />
              Proje İsim 4
              <FaChevronDown className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="mt-2 w-full bg-white rounded-md shadow-lg py-2 z-20">
                <Link href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Overview
                </Link>
                <Link href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Notifications
                </Link>
                <Link href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Analytics
                </Link>
                <Link href="#!" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Reports
                </Link>
              </div>
            )}
          </li>
          <li className="flex items-center text-gray-500">
            <button className="text-black px-10 py-3 hover:bg-gray-600 flex items-center w-full justify-between">
              <SiSimpleanalytics className="mr-5" />
              Proje Oluştur
            </button>
          </li>
        </ul>
        </div>
    );
}

export default SideBar;