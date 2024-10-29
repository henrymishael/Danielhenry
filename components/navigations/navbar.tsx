"use client";
import { mulish } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

interface navbarItem {
  name: string;
  href: string;
}

const NavLinks: navbarItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);

  const handleScrollEvent = () => {
    if (window.scrollY > 1) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  });
  return (
    <header
      className={`${
        scrolling ? "shadow-md py-2 bg-black/60" : "shadow-none py-4 md:py-6"
      } sticky left-0 right-0 top-0 z-40 container ${
        mulish.className
      } px-10 flex flex-row items-center justify-between `}
    >
      <Link href='/' className='hidden md:block'>
        <Image src='/logo_brand.svg' alt='logo-brand' height={68} width={68} />
      </Link>

      <Link href={"/"} className='block md:hidden'>
        <Image src='/logo_brand.svg' alt='logo-brand' height={40} width={40} />
      </Link>
      <nav className='hidden md:flex items-center gap-6 text-brand-text'>
        {NavLinks.map((item: any) => (
          <Link href={item?.href} key={item?.name}>
            <li className='list-none'>{item?.name}</li>
          </Link>
        ))}
      </nav>
      <FaBars className='md:hidden' color='white' size={24} />
    </header>
  );
};

export default Navbar;
