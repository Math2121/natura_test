"use client"
import CupomIcon from '../../public/cupom.svg'
import Image from "next/image";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "../components/CartItem";
import { useQuery } from "react-query";
import { getData } from "../data/getProducts";
import { createCart } from '../data/createCart';
import { useRouter } from 'next/navigation';


function Page() {
    const router = useRouter()

    const { cartItems, removeAllItems } = useShoppingCart()

    const { data: data } = useQuery({
        queryKey: "products",
        queryFn: () => getData()
    })



    if (!cartItems || !data) return <div>Loading...</div>

    const totalItems = cartItems.reduce((total, cartItem) => {
        const items = data.data.find((item: any) => item.id === cartItem.id)


        return total + (items.price * cartItem.quantity);
    }, 0)

    const formatPrice = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(totalItems);

    const handleCart = async () => {
        await createCart(
            {
                items: cartItems.map((item) => ({
                    productId: item.id,
                    quantity: item.quantity
                }))
            }
        )
        removeAllItems()
        router.push('/')
    }
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold">Seu carrinho</h2>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full  rounded-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">


                            <div className="rounded-md border-gray-300 border-2 p-6">
                                {cartItems && cartItems.map((cartItem) => (
                                    <CartItem {...cartItem} key={cartItem.id} />
                                ))}
                            </div>
                            <div className="border-gray-400 border-2 rounded-lg p-4">
                                <h2 className="text-2xl font-bold">Sumário</h2>
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">Subtotal:</p>
                                        <p className="text-lg font-bold">{
                                            formatPrice
                                        }</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">Frete:</p>
                                        <p className="text-lg font-bold">R$ 00,00</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">Desconto:(-20%)</p>
                                        <p className="text-lg font-bold text-red-600">R$ 00,00</p>
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <p className="text-black">Total:</p>
                                        <p className="text-xl font-bold">{
                                            formatPrice
                                        }</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Image src={CupomIcon} alt="cupom icon" className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input type="text" className="w-full bg-gray-300 rounded-full p-2 pl-10 pr-3 py-2" placeholder="Cupom" />
                                        <button className="bg-black text-white font-bold py-2 px-4 rounded-full    ">Aplicar</button>
                                    </div>
                                    <div className="flex w-full">
                                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full  w-full  "
                                            onClick={handleCart}
                                        >Finalizar compra</button>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div >

    );
}

export default Page;

