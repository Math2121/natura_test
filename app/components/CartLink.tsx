"use client"
import Image from "next/image";
import Cart from '../../public/cart.svg'
import { useShoppingCart } from "../context/shoppingCartContext";

function CartLink() {
    const { cartQuantity } = useShoppingCart()

    return (

        <div className="  flex justify-center items-center">
            <div className="relative py-2">
                <a href="/cart">
                    <div className="t-0 absolute left-3">

                        {cartQuantity == 0 || cartQuantity == undefined ? "" : (
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                {cartQuantity}
                            </p>
                        )}

                    </div>


                    <Image src={Cart} alt='cart' className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}

export default CartLink;