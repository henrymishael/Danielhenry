import { mulish } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ounje = () => {
  const layer = [
    {
      id: 1,
      name: "UI/UX Design",
    },
    {
      id: 2,
      name: "e-commerce",
    },
    {
      id: 3,
      name: "Web Design",
    },
  ];
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col justify-end h-[90vh] md:h-[80vh] gap-6'>
        <div className='flex flex-col md:gap-6'>
          <h2
            className={`${mulish.className} text-[60px] md:text-[96px] font-bold`}
          >
            Ounje Bazaar
          </h2>
          <p className='text-brand-orange text-[20px] md:text-[32px] leading-[31px] md:-mt-8'>
            Ethnic supermarket
          </p>
          <div className='flex gap-4 flex-col items-start md:flex-row mt-6'>
            {layer.map((item: any) => (
              <div
                className='border  border-brand-text px-5 py-3 rounded-full'
                key={item?.id}
              >
                {item?.name}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-end text-brand-text/50'>
          <p>Role: Product Designer</p>
          <p>Year: 2022</p>
          <p>Period: 6 weeks</p>
        </div>
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Concept
        </h4>
        <p className='text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          In a world of fast-paced globalization and digital transformation,
          preserving and celebrating cultural traditions has become more
          important than ever. Ounje Bazaar, an online ethnic e-commerce store,
          has emerged as a unique platform that caters to the needs of
          individuals passionate about traditional spices, food items, and
          ethnic dishes. This case study delves into the journey, features, and
          impact of Ounje Bazaar in connecting sellers of traditional spices and
          food ingredients with food enthusiasts while fostering a sense of
          cultural preservation.
        </p>

        <p className='text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          {" "}
          Ounje Bazaar is dedicated to preserving and promoting the rich
          culinary traditions of diverse cultures. The platform was envisioned
          as a bridge that would allow both sellers of traditional spices and
          food ingredients and local restaurants specializing in ethnic dishes
          to showcase and sell their goods to a global audience. With the goal
          of preserving cultural heritage and fostering a sense of community
          among food lovers, Ounje Bazaar set out to provide a seamless online
          marketplace.
        </p>
      </div>
      <div className=''>
        <Image src={"/ounjepic.png"} alt='ounje1' width={1400} height={600} />
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Features and Functionality
        </h4>
        <ul className='list-disc flex flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            <span className='font-bold'>Financial Inclusion:</span> <br />
            Sabi Bank&apos;s primary objective was to promote financial
            inclusion by providing a mobile banking platform that could reach
            the unbankable population, particularly in remote and underserved
            areas.
          </li>
          <li>
            <span className='font-bold'>Local Restaurant Integration:</span>{" "}
            <br />
            Local restaurants specializing in ethnic cuisine are encouraged to
            join the platform. They can create their profiles, list their menus,
            and offer takeout or delivery services. This integration has not
            only expanded the offerings on Ounje Bazaar but also supported local
            restaurants during challenging times, especially when dine-in
            options were limited.
          </li>
          <li>
            <span className='font-bold'>Recipe Section:</span> <br />
            Ounje Bazaar&apos;s recipe section is a treasure trove for food
            enthusiasts. It offers step-by-step guides on how to prepare various
            ethnic dishes, allowing visitors to immerse themselves in the
            culinary traditions of different cultures. This section not only
            promotes the use of the products available on the platform but also
            educates and inspires users to experiment with new recipes.
          </li>
          <li>
            <span className='font-bold'>Community and Reviews:</span> <br />
            Ounje Bazaar fosters a sense of community by encouraging users to
            leave reviews and share their culinary experiences. Sellers and
            restaurants benefit from customer feedback, and visitors can make
            informed choices when purchasing products or ordering food.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-24'>
        <div className='flex flex-col md:flex-row  items-center gap-6'>
          <Image src={"/ounjepic2.png"} alt='' width={700} height={600} />
          <h3>Seller/Store Dashboard</h3>
        </div>
        <div className='flex flex-col md:flex-row justify-end  items-center gap-6'>
          <h3 className='hidden md:block'>Admin Dashboard</h3>
          <Image
            className='flex place-content-end'
            src={"/ounjepic3.png"}
            alt=''
            width={700}
            height={600}
          />
          <h3 className='md:hidden'>Admin Dashboard</h3>
        </div>
      </div>

      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Impact
        </h4>
        <ul className='list-disc flex flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            <span className='font-bold'>Supporting Local Business:</span> <br />
            Ounje Bazaar has played a pivotal role in supporting local spice and
            food ingredient sellers and restaurants. By providing them with a
            digital storefront, it has expanded their customer base beyond
            geographical boundaries
          </li>
          <li>
            <span className='font-bold'>Cultural Presentation:</span> <br />
            The platform has become a hub for cultural exchange and
            preservation. Users can explore and experience the culinary
            traditions of different cultures, fostering a deeper appreciation
            for diversity.
          </li>
          <li>
            <span className='font-bold'>Community Building:</span> <br />
            Ounje Bazaar has successfully created a community of food
            enthusiasts, sellers, and restaurant owners who share a passion for
            ethnic cuisine. This sense of belonging has strengthened the
            platform&apos;s user engagement and loyalty.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-24'>
        <div className='flex flex-col md:flex-row  items-center gap-6'>
          <Image src={"/ounjepic4.png"} alt='' width={700} height={600} />
          <h3>Recipe Page</h3>
        </div>
        <div className='flex flex-col md:flex-row  items-center gap-6'>
          {/* <h3 className='hidden md:block'>Seller/Store Dashboard</h3> */}
          <Image src={"/ounjepic5.png"} alt='' width={700} height={600} />
          <h3 className=''>Restaurant Menu Page</h3>
        </div>
      </div>
      <p className='text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
        Ounje Bazaar stands as a testament to the power of digital innovation in
        preserving cultural traditions and fostering community engagement.
        Through its unique features and commitment to empowering sellers and
        local restaurants, the platform has become a global destination for
        those seeking to explore, celebrate, and savor the flavors of tradition.
        Ounje Bazaar&apos;s journey reflects the evolving landscape of
        e-commerce, where technology serves as a bridge between cultures,
        enriching lives and experiences.
      </p>
    </div>
  );
};

export default Ounje;
