import React from 'react';
const Nav = () => {
    return (
        <header className="bg-white shadow">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Cosméticos&Co</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>Produtos</li>
                        {/* ... outros itens do menu */}
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <input type="text" placeholder="O que está buscando hoje?" />
                    <button>Buscar</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        {/* Ícone do carrinho */}
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        {/* Ícone do usuário */}
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Nav