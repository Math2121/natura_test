import Image from "next/image";
import PerfumeImage from "../../public/perfurme.png"

type CardProps = {

    product: {
        name: string,
        image: string,
        description: string,
        price: number
        id:number
    }[]
    fetchData: ()=> void
    hasNextpage: boolean | undefined
    isFetchingNextPage: boolean

}
function Card({product,fetchData,hasNextpage,isFetchingNextPage}: CardProps) {
    return (
        <>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                {product.map((product) => (
                    <div className="bg-white rounded  p-4" key={product.id}>
                        <Image src={product.image} alt="Produto" className="w-full h-30 object-cover rounded-md mb-5"
                        width={30} height={30} />
                        <h3 className="text-sm font-bold">{product.name}</h3>
                        <p className="text-gray-500">★★★★★ 5.0/5</p>
                        <p className="text-lg font-bold">R${product.price}</p>
                    </div>
                ))}


            </div>
            <div className="w-full flex ">
                <button className=" mx-auto text-center border-gray-500 rounded-3xl p-2 border-2" onClick={() => fetchData()} disabled={isFetchingNextPage || !hasNextpage}>Carregar outros</button>
            </div>
        </>
    );
}

export default Card;