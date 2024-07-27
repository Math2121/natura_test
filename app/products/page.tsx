
import Product from "../components/Product";
export default async function Home() {
    async function getData() {
        const res = await fetch('https://natura-test-server.onrender.com/products', {
          cache: "no-cache"
        })
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json()
      }
    
    
      const data = await getData()
    return (
        <div>
            {data.data.map((product:any, index:number) => (
                <Product {...product}  key={index}/>
            ))}
        </div>

    );
}
