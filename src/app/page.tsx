import About from "@/components/about";
import Brand from "@/components/brand";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Brand/>
      <Portfolio/>
      <Services/>
      <Footer/>
    </>
  );
}
