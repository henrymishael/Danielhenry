import { mulish } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Works = () => {
  return (
    <div className='flex flex-col gap-4 px-2 md:px-8'>
      <div
        className={` ${mulish.className}  flex md:flex-row flex-col items-start justify-center gap-4 mt-16 md:mt-0`}
      >
        <Link
          href={`/works/sabi`}
          className='group w-full md:w-[50%] bg-brand-blue rounded-[5px] px-4 pt-4 flex flex-col  justify-center gap-6 overflow-hidden'
        >
          <div className='flex flex-row justify-between items-start text-brand-text'>
            <div className='flex flex-col '>
              <h4 className='text-[24px] md:text-[28px] font-medium'>
                Sabi Bank
              </h4>
              <p className='text-[16px] md:text-[20px] '>Financial App</p>
            </div>
            <FaArrowRightLong className=' -rotate-[45deg]' />
          </div>
          <div className='flex items-center justify-center group-hover:scale-110 transition-all ease-in-out'>
            <Image
              src={"/Wood-Hand.png"}
              alt='sabi_bank'
              width={360}
              height={497}
            />
          </div>
        </Link>
        <Link
          href='/works/ounje'
          className='group w-full md:w-[50%] h-[370px] md:h-[543px] bg-brand-orange rounded-[5px]  relative     overflow-hidden'
        >
          <div className='flex flex-row justify-between items-start text-brand-text px-4 w-[90%] pt-4'>
            <div className='flex flex-col '>
              <h4 className='text-[24px] md:text-[28px] font-medium'>
                Ounje Bazaar
              </h4>
              <p className='text-[16px] md:text-[20px] '>
                Online Ethnic Supermarket
              </p>
            </div>
            <FaArrowRightLong className='-rotate-[45deg]' />
          </div>
          <div className='group-hover:scale-110 -mt-20 md:-mt-24 transition-all ease-in-out'>
            <Image
              src={"/Ounje3.png"}
              alt='sabi_bank'
              width={800}
              height={150}
            />
          </div>
        </Link>
      </div>
      <Link
        href='/works/fitgo'
        className='group h-[370px] md:h-[500px] bg-brand-green rounded-[5px]  relative flex flex-col gap-24 md:gap-0   overflow-hidden '
      >
        <div className='flex flex-row justify-between items-start text-black px-4 pt-4'>
          <div className='flex flex-col '>
            <h4 className='text-[24px] md:text-[28px] font-medium'>FitGo</h4>
            <p className='text-[16px] md:text-[20px] '>Fitness App</p>
          </div>
          <FaArrowRightLong className=' -rotate-[45deg]' />
        </div>
        <div className='flex group-hover:scale-110 transition-all ease-in-out'>
          <Image src={"/fitpro.png"} alt='sabi_bank' width={800} height={150} />
        </div>
      </Link>
    </div>
  );
};

export default Works;
