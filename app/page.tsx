
import Image from "next/image";
import HeroImage from '../public/hero.png'
import Card from "./components/Card";

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
    <main className="w-full">
      <Image src={HeroImage} alt="Se joga no arraia" className="w-full " />

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Descubra as fragrâncias que combinam com você</h2>

        <div>

          <Card
            product={data.data} />
        </div>

      </section>

    </main>
  );
}
