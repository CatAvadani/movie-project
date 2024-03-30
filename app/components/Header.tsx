"use client";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // use this when the component mounts
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Image src='/logo-red.svg' alt='logo' width={200} height={200} />
        <ul className=' hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Show</li>
          <li className='headerLink'>Movie</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light'>
        <MagnifyingGlassIcon className=' hidden sm:inline w-6 h-6' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='w-6 h-6' />
        <Link href='/login'>
          <Image
            src='https://rb.gy/g1pwyx'
            alt=''
            className='cursor-pointer rounded'
            width={40}
            height={40}
          />
        </Link>
      </div>
    </header>
  );
}
