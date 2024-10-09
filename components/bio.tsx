"use client";
import { mulish } from "@/font";
import React from "react";
import { Button } from "./ui/button";
import { FaFigma, FaLinkedinIn } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoLogoDribbble, IoLogoInstagram } from "react-icons/io";
import CountUp from "react-countup";
import Link from "next/link";

const Bio = () => {
  return (
    <div
      className={` ${mulish.className} flex flex-col lg:flex-row items-start justify-center  gap-4 h-[608px] xs:mt-32 mt-10 md:mt-24  lg:mt-0 px-2`}
    >
      <div
        className={`flex flex-col gap-5 md:gap-10 justify-center p-8 rounded-[5px]  bg-brand-lime w-full  lg:w-[65%]  `}
      >
        <p className=''>
          Hello there <span className='wave'>👋</span>
        </p>

        <div className='space-y-0.5'>
          <h1 className='text-[36px] md:text-[64px] font-medium'>
            Henry Daniel
          </h1>
          <h4 className='text-[20px] md:text-[36px]'>UI/UX Designer</h4>
        </div>
        <p>
          {`I believe that great design should be user-centered, functional, and
        aesthetically pleasing. Throughout my career, I've had the privilege of
        working on a diverse range of projects that have allowed me to develop a
        unique skill set and a deep understanding of the design process. In this
        portfolio, I'll showcase some of my most notable work, highlighting my
        skills, design philosophy, and commitment to creating exceptional user
        experiences.`}
        </p>
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
      <div className='flex flex-col items-start justify-center gap-4 w-full lg:w-[30%]'>
        <div className='flex lg:flex-col w-full lg:w-[388px] md:gap-8 justify-between   bg-brand-peach p-4 rounded-[5px]'>
          <div className='space-y-1 text-center md:text-left'>
            <h2 className='xs:text-[28px] text-[40px] md:text-[64px] leading-[35px]  md:leading-[55px] '>
              4
            </h2>
            <p className='text-[16px] font-medium text-[#5c5c5c]'>
              years of Experience
            </p>
          </div>
          <div className='space-y-1 text-center md:text-left'>
            <h2 className='xs:text-[28px] text-[40px] md:text-[64px] leading-[35px] md:leading-[55px] '>
              <CountUp end={25} duration={2} />+
            </h2>
            <p className='text-[16px] font-medium text-[#5c5c5c]'>
              Projects Done
            </p>
          </div>
          <div className='space-y-1 text-center md:text-left'>
            <h2 className='xs:text-[28px] text-[40px] md:text-[64px] leading-[35px]  md:leading-[55px]'>
              <CountUp end={95} duration={3} />%
            </h2>
            <p className='text-[16px] font-medium text-[#5c5c5c]'>
              Satisfaction Rate
            </p>
          </div>
        </div>
        <div className='w-full lg:w-[388px] bg-brand-nude rounded-[5px] flex justify-between   lg:flex-col p-4 gap-[34px] '>
          <h4 className='text-[24px] md:text-[36px] font-medium'>
            Featured Works
          </h4>
          <div className='w-9 h-9 md:w-[50px] md:h-[50px] rounded-full bg-black flex justify-center items-center animate-bounce cursor-pointer'>
            <FaArrowDownLong color='white' className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
