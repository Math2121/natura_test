"use client"
import Image from "next/image";
import { useShoppingCart } from "../context/shoppingCartContext";

type ProductProps = {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
}
function Product({ name, image, price, description, id }: ProductProps) {
    const { addCartItem,getItemQuantity } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <div className="container mx-auto py-12" >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4" >

                <div className="bg-white rounded p-4 flex items-center gap-5">
                    <Image src={image} alt={name} className=" h-40 object-cover rounded-md h-full" width={80} height={30} />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="text-gray-500 mb-5">{description}</p>
                        <p className="text-lg font-bold mb-5">R$ {price}</p>
                        <button
                            onClick={() => addCartItem(id)}
                            className={` text-white font-bold py-2 px-4 rounded-full w-full ${ quantity === 0 ? 'bg-orange-500 hover:bg-orange-700' : 'bg-gray-600  pointer-events-none'} `}>Adicionar

                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product;