'use client'
import Product from "@/app/components/Product";
import { getDataByName } from "@/app/data/getProductByName";
import { useQuery } from "react-query";


function Page({ params }: { params: { slug: string } }) {

    const { data, isLoading } = useQuery({
        queryKey: ["product-name"],
        queryFn: async () => await getDataByName(params.slug),

    })

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>

           {data?.data && data?.data.map((item:any) => (
            <Product {...item} key={item.id}/>
           ))}

        </div>
    );
}

export default Page;