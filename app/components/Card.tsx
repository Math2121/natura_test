import Image from "next/image";
import PerfumeImage from "../../public/perfurme.png"

function Card() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="bg-white rounded  p-4">
                    <Image src={PerfumeImage} alt="Produto" className="w-full h-40 object-cover rounded-md mb-5" />
                    <h3 className="text-sm font-bold">Essencial Masculino 100ml</h3>
                    <p className="text-gray-500">★★★★★ 5.0/5</p>
                    <p className="text-lg font-bold">R$212,00</p>
                </div>
            </div>
            <div className="w-full flex ">
                <button className=" mx-auto text-center border-gray-500 rounded-3xl p-2 border-2">Carregar outros</button>
            </div>
        </>
    );
}

export default Card;