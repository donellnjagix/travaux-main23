import Link from 'next/link';
import React from 'react';
import Logo from "@/public/images/logo.jpeg";
import Image from 'next/image';

type Props = {};

const Nav = (props: Props) => {
  const navStyle = {
    fontFamily: 'Roboto',
    backgroundColor: '#557ca9', // Set the background color to #557ca9
  };

  return (
    <nav style={navStyle}>
      <div className="fixed top-0 z-30 w-full py-4 drop-shadow-md">
        <div className="flex items-center justify-between mx-auto w-5/6">
          <Link href="/">
            <Image src={Logo} alt="logo" height="70" width="70" className="object-cover scale-125" />
          </Link>
          <div className='flex items-center gap-8'>
            <Link href="/" className='uppercase font-semibold' style={{ color: 'white', transition: 'color 0.3s' }}>
              Home
            </Link>
            <Link href="/about" className='uppercase font-semibold' style={{ color: 'white', transition: 'color 0.3s' }}>
              About
            </Link>
            <Link href="/properties" className='uppercase font-semibold' style={{ color: 'white', transition: 'color 0.3s' }}>
              Design
            </Link>
            <Link href="/projects" className='uppercase font-semibold' style={{ color: 'white', transition: 'color 0.3s' }}>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
