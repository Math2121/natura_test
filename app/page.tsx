"use client"
import Image from "next/image";
import HeroImage from '../public/hero.png'
import Card from "./components/Card";
import { useInfiniteQuery, useQuery } from "react-query";
import { getData } from "./data/getProducts";
import { useState } from "react";

export default function Home() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 1 }) => getData(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.page + 1
    }

  )

  return (
    <main className="w-full">
      <Image src={HeroImage} alt="Se joga no arraia" className="w-full " />

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Descubra as fragrâncias que combinam com você</h2>

        <div>

          {isLoading ? <></> :
            (
              data?.pages && data?.pages.map((page, i) => (
                <Card
                  product={page.data}
                  fetchData={fetchNextPage}
                  hasNextpage={hasNextPage}
                  isFetchingNextPage={isFetchingNextPage}
                  key={i}

                />
              )
              ))

          }

        </div>

      </section>

    </main>
  );
}
