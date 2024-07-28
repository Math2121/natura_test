"use client"
import { QueryClientProvider } from "react-query";
import "../styles/globals.css";
import Nav from "./components/Nav";
import Notify from "./components/Notify";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import  { queryClient } from "./library/react-query/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <QueryClientProvider client={queryClient}>
          <ShoppingCartProvider>
            <Notify />
            <Nav />
            {children}
          </ShoppingCartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
