
import Image from "next/image"
import { useShoppingCart } from "../context/shoppingCartContext"
import TrashIcon from "../../public/trash.svg"
import PlusIcon from "../../public/plus.svg"
import MinusICon from "../../public/minus.svg"
import { getData } from "../data/getProducts"
import { useQuery } from "react-query"
type CartProps = {
    id: number
    quantity: number
}
function CartItem({
    id, quantity
}: CartProps) {
    const { removeItem, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
    const { data: data } = useQuery({
        queryKey: ["products"],
        queryFn: () => getData()
    })


    const product = data && data.data.find((item: any) => item.id === id)

    return (
        <>
            <div className="flex items-center gap-4 mt-10 mb-2">
                <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <Image alt="product image" src={product.image} className="w-full h-full object-contain" width={25} height={25} />
                </div>

                <div className="w-full">
                    <div className="flex">
                        <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                        <div className="ml-auto">

                            <Image alt="product image" src={TrashIcon} className="w-5 h-5 object-contain" width={5} height={5} onClick={
                                () => removeItem(id)
                            } />
                        </div>
                    </div>


                    <div className="flex justify-between gap-4 mt-10">

                        <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">$18.00</h6>
                        <div>
                            <button type="button" className="flex items-center px-2.5 py-1.5 border bg-gray-400 border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-full">

                                <Image alt="product image" src={MinusICon} className="w-5 h-5 object-contain" width={5} height={5} onClick={
                                    () => decreaseItemQuantity(id)
                                } />

                                <span className="mx-2.5">{quantity}</span>
                                <Image alt="product image" src={PlusIcon} className="w-5 h-5 object-contain" width={5} height={5}
                                    onClick={
                                        () => increaseItemQuantity(id)
                                    } />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default CartItem;