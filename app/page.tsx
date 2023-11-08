"use client"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { SelectedPage } from "./types/types";
import Homes from "./components/home";
import Property from "./properties";
import FloatingWButton from "./components/WhatsAppButton";
import TopBar from './TopBar';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) return setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);

    // When the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Homes />
      </div>

      <h1 className="text-center text-orange text-2xl sm:text-3xl md:text-4xl mt-4">
        Our Design
      </h1>

      <Property />

      <FloatingWButton />
    </main>
  );
}
