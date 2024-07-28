"use client"
import React, { useState } from 'react';
import SearchBar from './Searchbar';
import Image from 'next/image';
import ArrowDown from '../../public/down-arrow.svg'
import Cart from '../../public/cart.svg'
import User from '../../public/user.svg'
import NavIcon from '../../public/nav.svg'
import CartLink from './CartLink';
import { useRouter } from 'next/navigation';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <header className="bg-white container mx-auto">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold" onClick={() => router.push('/')}>Cosméticos&Co</h1>
                <nav>
                    <ul className="flex space-x-4 pl-2">
                        <li>
                            <span className="flex gap-2 items-center ">
                                Produtos <Image src={ArrowDown} alt='arrow down' className="w-3 h-5" />
                            </span> </li>

                    </ul>
                </nav>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    data-collapse-toggle="navbar-default" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 `}>
                    <span className="sr-only">Open main menu</span>
                    <Image src={NavIcon} alt="nav icon" />
                </button>
                <div className={` hidden md:flex  flex-1  items-center  space-x-4 pl-5`} id="navbar-default">
                    <SearchBar />
                    <CartLink />
                    <Image src={User} alt='user' className="w-5 h-5" />
                </div>
            </div>
            <div className={` ${!isOpen ? 'hidden' : ' grid grid-cols-1 '} md:hidden   items-center  space-x-4 pl-5`} id="navbar-default">
                <SearchBar />
                <CartLink />
                <Image src={User} alt='user' className="w-5 h-5" />
            </div>
        </header>
    )
}

export default Nav