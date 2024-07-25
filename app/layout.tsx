import "../styles/globals.css";
import Nav from "./components/Nav";
import Notify from "./components/Notify";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Notify />
        <Nav />
        {children}
      </body>
    </html>
  );
}
