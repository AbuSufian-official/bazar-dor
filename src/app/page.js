import Image from "next/image";
import Hero from "./components/hero";
import PriceUp from "./components/priceUp";
import PriceDown from "./components/priceDown";
import Allproduct from "./components/allproduct";


export default function Home() {
  return (
    <>
    <main>
      <Hero/>
      <PriceUp/>
      <PriceDown/>
      <Allproduct/>
    </main>
    </>
  );
}
