'use client'
export const dynamic = 'force-dynamic'


import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { SelectedPage } from "./types/types";
import Homes from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Mission from "./components/mission";
import CoreValues from "./components/core-values";
import Structure from "./components/structure";
import Team from "./components/team";
import ChooseUs from "./components/choose-us";
import Contact from "./components/contact";
import Footer from "./footer";
import FloatingWButton from "./components/WhatsAppButton";
import Property from "./properties";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) return setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    // when the component unmounts [componentwillunmount :)]
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  return (
    <main>
   <div className="mt-30">
   <Homes/>
   </div>
  
   <Property />
   
   <FloatingWButton />
    </main>
  );
}
