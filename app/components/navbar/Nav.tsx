import Link from 'next/link'
import React from 'react'
import Logo from "@/public/images/logo.jpeg";
import Image from 'next/image';

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
        <div className="bg-accent-white fixed top-0 z-30 w-full py-4 drop-shadow-md">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <Link href="/">
                <Image src={Logo} alt="logo" height="70" width="70" className="object-cover scale-125" />
                </Link>
                <div className='flex items-center gap-8'>
                <Link href="/" className='uppercase font-semibold'>Home</Link>
                <Link href="/about" className='uppercase font-semibold'>About</Link>
               
                <Link href="/properties" className='uppercase font-semibold'>Desighn</Link>
                <Link href="/projects" className='uppercase font-semibold'>Projects</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav