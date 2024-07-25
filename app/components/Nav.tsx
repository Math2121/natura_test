import React from 'react';
import SearchBar from './Searchbar';
import Image from 'next/image';
import ArrowDown from '../../public/down-arrow.svg'
import Cart from '../../public/cart.svg'
import User from '../../public/user.svg'
const Nav = () => {
    return (
        <header className="bg-white container mx-auto">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Cosméticos&Co</h1>
                <nav>
                    <ul className="flex space-x-4 pl-2">
                        <li>
                            <span className="flex gap-2 items-center ">
                                Produtos <Image src={ArrowDown} alt='arrow down' className="w-3 h-5" />
                            </span> </li>

                    </ul>
                </nav>
                <div className="flex flex-1 items-center  space-x-4 pl-5">
                    <SearchBar />
                    <Image src={Cart} alt='cart' className="w-5 h-5" />
                    <Image src={User} alt='user' className="w-5 h-5" />
                </div>
            </div>
        </header>
    )
}

export default Nav