import React from 'react';
import SearchBar from './Searchbar';
const Nav = () => {
    return (
        <header className="bg-white ">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Cosméticos&Co</h1>
                <nav>
                    <ul className="flex space-x-4 pl-2">
                        <li>Produtos</li>

                    </ul>
                </nav>
                <div className="flex flex-1  space-x-4 pl-5">
                    <SearchBar />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        {/* Ícone do carrinho */}
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-5 h-5">
                        {/* Ícone do usuário */}
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Nav