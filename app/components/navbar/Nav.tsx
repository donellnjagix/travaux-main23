import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/outline';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import logo from '@/public/images/logo.png';

type Props = {};

const Nav = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const router = useRouter();

  return (
    <div className="p-3 shadow-lg fixed top-0 z-30 w-full bg-white">
      <div className="flex justify-between items-center w-5/6 mx-auto">
        {/* Image */}
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <Image
            src={logo}
            alt="logo"
            height={70}
            width={70}
            className="object-cover"
          />
        </div>
        {/* Links */}
        {isAboveMediumScreens ? (
          <div className="flex gap-4">
            <p
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
              onClick={() => router.push('/')}
            >
              Home
            </p>
            <Link
              href="#properties"
              passHref
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
            >
              Properties
            </Link>
            <Link
              href="#design"
              passHref
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
            >
              Design
            </Link>
            <Link
              href="#contactus"
              passHref
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
            >
              Contact
            </Link>
          </div>
        ) : (
          <button
            className="rounded-full bg-accent-orange p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-alice-blue drop-shadow-xl">
          {/* Close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="text-accent-black w-6 h-6" />
            </button>
          </div>
          {/* Menu items */}
          <div className={`flex flex-col gap-10 ml-[33%] text-2xl`}>
            <p
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
              onClick={() => router.push('/')}
            >
              Home
            </p>
            <Link
              href="#properties"
              passHref
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
            >
              Properties
            </Link>
            <Link
              href="#design"
              passHref
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
            >
              Design
            </Link>
            <Link
              href="#contactus"
              passHref
              className="transition duration-300 text-base hover:text-accent-orange cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
