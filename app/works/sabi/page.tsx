import { mulish } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sabi = () => {
  const layer = [
    {
      id: 1,
      name: "UI/UX Design",
    },
    {
      id: 2,
      name: "Fintech",
    },
    {
      id: 3,
      name: "Mobile App",
    },
  ];
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col justify-end h-[90vh] md:h-[80vh] gap-6'>
        <div className='flex flex-col md:gap-6'>
          <h2
            className={`${mulish.className} text-[60px] md:text-[96px] font-bold`}
          >
            SABI Bank
          </h2>
          <p className='text-brand-accent text-[20px] md:text-[32px] leading-[31px] md:-mt-8'>
            Banking the unbankable
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
          {` Sabi Bank is a fintech mobile banking app that aims to provide
          financial services to the unbanked population. The app is designed to
          be user-friendly and accessible to people who do not have access to
          traditional banking services. Sabi Bank offers a range of services,
          including account opening, money transfer, bill payment, and savings. `}
          <Link
            className=' underline'
            href='https://en.wikipedia.org/wiki/Sahara_India_Pariwar_investor_fraud_case'
          >
            {` According to the World Bank, there are approximately 1.7 billion
            people worldwide who do not have access to formal financial
            services`}
          </Link>
          . Sabi Bank aims to bridge this gap by providing a mobile banking
          platform that is easy to use and accessible to everyone.
        </p>
      </div>
      <div className='flex items-center justify-center h-[300px] md:h-[660px] bg-[#E7FF87]'>
        <Image src={"/sabiImg1.png"} alt='' width={1000} height={660} />
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          The Objective
        </h4>
        <ul className='list-disc flex flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            {`Financial Inclusion: Sabi Bank's primary objective was to promote
            financial inclusion by providing a mobile banking platform that
            could reach the unbankable population, particularly in remote and
            underserved areas.`}
          </li>
          <li>
            Accessibility: Sabi Bank aimed to make banking services accessible
            to anyone with a smartphone, eliminating the need for physical bank
            branches and paperwork.
          </li>
          <li>
            Affordability: The app was designed to offer low-cost financial
            services, including zero or minimal fees for transactions, making it
            an attractive option for individuals with limited financial
            resources.
          </li>
          <li>
            Education: Sabi Bank recognized the importance of financial literacy
            and included educational tools within the app to empower users with
            financial knowledge.
          </li>
        </ul>
      </div>
      <div className='flex  flex-col md:flex-row gap-4'>
        <div className='h-[660px] bg-[#96adff] w-full md:w-[50%] flex   items-center justify-center'>
          <Image src={"/sabiImg2.png"} alt='' width={268} height={540} />
        </div>
        <div className='h-[660px] bg-[#ffece1] w-full md:w-[50%] flex items-center justify-center'>
          <Image src={"/sabiImg3.png"} alt='' width={501} height={552} />
        </div>
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Challenges
        </h4>
        <ul className='list-disc flex flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            Regulatory Compliance: Adhering to diverse and often complex
            regulatory requirements across different regions proved challenging.
            Sabi Bank had to navigate legal and compliance issues while
            expanding its services.
          </li>
          <li>
            Cybersecurity Threats: With the increase in users and transactions,
            Sabi Bank faced cybersecurity threats. They had to continually
            invest in security measures to protect user data and transactions.
          </li>
        </ul>
      </div>
      <div className='list-disc flex flex-col  text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
        <p>
          One of the key features of Sabi Bank is its focus on financial
          inclusion. The app is designed to provide financial services to people
          who are excluded from traditional banking services due to factors such
          as poverty, lack of documentation, or living in remote areas. By
          providing these services, Sabi Bank aims to promote financial
          inclusion and help people improve their economic well-being.
        </p>
      </div>
      <div className='flex flex-col gap-12'>
        <div className='overflow-hidden bg-[#E6FFE2] flex items-center justify-center'>
          <Image src={"/sabiImg4.png"} alt='' width={1400} height={2158} />
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='md:w-[40%] bg-[#96ADFF] flex items-center justify-center '>
            <Image src={"/sabiImg5.svg"} alt='' width={268} height={540} />
          </div>

          <div className='md:w-[60%] bg-[#FFECE1] flex items-center justify-center'>
            <Image src={"/sabiImg6.svg"} alt='' width={748} height={561} />
          </div>
        </div>
      </div>
      <div>
        <p className='text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          Sabi Bank is a fintech mobile banking app that aims to provide
          financial services to the unbanked population. The app is designed to
          be user-friendly and accessible to everyone, with a range of services
          tailored to the needs of the unbanked population. By promoting
          financial inclusion, Sabi Bank aims to help people improve their
          economic well-being and achieve financial stability.
        </p>
      </div>
    </div>
  );
};

export default Sabi;
