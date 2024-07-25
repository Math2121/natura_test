const products = [
    {
        id: 1,
        name: 'Hidratante Masculino',
        description: '100ml',
        price: 212,
        image: '/path/to/your/image.jpg',
    },
    // ... outros produtos
];
function Product() {
    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded p-4 flex items-center gap-5">
                        <img src={product.image} alt={product.name} className=" h-40 object-cover rounded-md" />
                        <div className="flex-1">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p className="text-gray-500 mb-5">{product.description}</p>
                            <p className="text-lg font-bold mb-5">R$ {product.price},00</p>
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full w-full">Adicionar

                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;