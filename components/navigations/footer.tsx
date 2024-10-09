import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { IoLogoDribbble, IoLogoInstagram } from "react-icons/io";
import { FaFigma, FaLinkedinIn } from "react-icons/fa";
import { mulish } from "@/font";

const Footer = () => {
  return (
    <footer className={`mt-10 container px-7 md:px-10 `}>
      <div
        className={`${mulish.className}   bg-brand-footer p-4 space-y-6 rounded-lg`}
      >
        <h2 className='text-[26px] md:text-[64px] font-medium'>
          Want to collaborate?
        </h2>
        <p>
          Please contact me for collaboration or simply a nice hello{" "}
          <span className='wave'>👋</span>
        </p>
        <Link className='underline' href={""}>
          danielhenryreal@gmail.com
        </Link>
        <div className='flex flex-row items-center justify-between md:justify-normal md:gap-5 mt-3'>
          <Button
            variant={"default"}
            className='bg-black rounded-[24px] md:px-10 mr-2'
          >
            Contact
          </Button>
          <Link
            href=''
            className='h-9 w-9 flex bg-black items-center justify-center rounded-full'
          >
            <IoLogoDribbble color='white' size={24} />
          </Link>
          <Link
            href=''
            className='h-9 w-9 flex bg-black items-center justify-center rounded-full'
          >
            <FaFigma color='white' size={20} />
          </Link>
          <Link
            href=''
            className='h-9 w-9 flex bg-black items-center justify-center rounded-full'
          >
            <IoLogoInstagram color='white' size={20} />
          </Link>
          <Link
            href=''
            className='h-9 w-9 flex bg-black items-center justify-center rounded-full'
          >
            <FaLinkedinIn color='white' size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
