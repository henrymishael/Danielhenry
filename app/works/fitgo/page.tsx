import { mulish } from "@/font";
import Image from "next/image";
import React from "react";

const FitGo = () => {
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
            FitGo
          </h2>
          <p className='text-[#80fb05] text-[20px] md:text-[32px] leading-[31px] md:-mt-8'>
            Fitness Application
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
          <p>Year: 2021</p>
          <p>Period: 12 weeks</p>
        </div>
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Concept
        </h4>
        <p className='text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          In today&apos;s fast-paced world, health and fitness have become a
          priority for many individuals. With the increasing demand for
          convenient and personalized fitness solutions, FitGo, a fitness mobile
          app, aims to revolutionize the fitness industry. This case study
          explores FitGo&apos;s journey from inception to its promising future,
          highlighting key milestones, challenges, and its impact on users&apos;
          lives.
        </p>
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Features and Functionality
        </h4>
        <p className='text-[16px] md:text-[20px]'>
          FitGo offers a wide array of features and functionalities to cater the
          diverse needs of its users:
        </p>
        <ol className=' flex list-decimal flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            <span className='font-bold'>Personalized workouts:</span> <br />
            FitGo provides users with workout plans tailored to their fitness
            goals, whether it&apos;s weight loss, muscle gain, or overall
            wellness. Users can choose from a variety of workout types,
            including cardio, strength training, yoga, and more.
          </li>
          <li>
            <span className='font-bold'>Nutrition Tracking:</span> <br />
            The app offers a comprehensive nutrition tracking system, enabling
            users to log their meals, count calories, and monitor their
            macronutrient intake. It also suggests meal plans based on dietary
            preferences and restrictions.
          </li>
          <li>
            <span className='font-bold'>Wearable Device Integration:</span>{" "}
            <br />
            FitGo seamlessly integrates with popular wearable fitness devices,
            allowing users to sync their data and monitor their progress in one
            place.
          </li>
          <li>
            <span className='font-bold'>Progress Tracking:</span> <br />
            Users can track their fitness journey with detailed statistics,
            including weight, body measurements, and workout history. The app
            generates visual charts and graphs to help users visualize their
            progress
          </li>
        </ol>
      </div>

      <div className='flex flex-col md:flex-row  items-center gap-6'>
        <Image src={"/fitgo1.png"} alt='fitgo1' width={1400} height={1700} />
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          User Engagement Strategies
        </h4>
        <p className='text-[16px] md:text-[20px]'>
          {" "}
          FitGo has employed several user engagement strategies that have
          contributed to its success:
        </p>
        <ol className=' flex list-decimal flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            <span className='font-bold'>Gamification:</span> <br />
            FitGo incorporates gamification elements such as badges, rewards,
            and challenges to keep users motivated and engaged.
          </li>
          <li>
            <span className='font-bold'>Push Notifications:</span> <br />
            Users receive personalized push notifications for workout reminders,
            goal achievements, and community updates, ensuring they stay
            connected and motivated.
          </li>
          <li>
            <span className='font-bold'>Regular Updates:</span> <br />
            FitGo consistently updates its app with new features, workouts, and
            challenges to maintain user interest and adapt to evolving fitness
            trends.
          </li>
          <li>
            <span className='font-bold'>User Feedback:</span> <br />
            The development team actively listens to user feedback and
            incorporates suggestions for improvements, making users feel heard
            and valued.
          </li>
        </ol>
      </div>
      <div className='flex  flex-col md:flex-row gap-4'>
        <Image
          className='md:w-[50%]'
          src={"/fitgo2.png"}
          alt=''
          width={530}
          height={540}
        />

        <Image
          className='md:w-[50%]'
          src={"/fitgo3.png"}
          alt=''
          width={530}
          height={552}
        />
      </div>
      <div className='space-y-1'>
        <h4 className={`text-[40px] font-medium ${mulish.className}`}>
          Impact
        </h4>
        <p className='text-[16px] md:text-[20px]'>
          FitGo&apos;s impact on its users and the fitness community has been
          remarkable:
        </p>
        <ul className='list-disc flex flex-col gap-6 px-5 text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
          <li>
            <span className='font-bold'>Improved Fitness Levels:</span> <br />
            Users report significant improvements in their fitness levels,
            including weight loss, muscle gain, and increased stamina.
          </li>
          <li>
            <span className='font-bold'>Healthier Lifestyles:</span> <br />
            FitGo has played a pivotal role in promoting healthier eating habits
            and lifestyles among its users, resulting in better overall health.
          </li>
          <li>
            <span className='font-bold'>Community Building:</span> <br />
            Ounje Bazaar has successfully created a community of food
            enthusiasts, sellers, and restaurant owners who share a passion for
            ethnic cuisine. This sense of belonging has strengthened the
            platform&apos;s user engagement and loyalty.
          </li>
          <li>
            <span className='font-bold'>Market expansion:</span> <br />
            FitGo has expanded its reach globally, helping individuals from
            diverse backgrounds achieve their fitness goals.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-24'>
        <Image src={"/fitgo4.png"} alt='fitgo1' width={1400} height={1700} />
      </div>
      <p className='text-[16px] md:text-[20px] leading-[32px] md:leading-[40px] text-brand-text/90'>
        FitGo will quickly gained recognition in the fitness industry for its
        innovative approach to health and well-being. With its user-focused
        design, engaging community, and commitment to helping individuals
        achieve their fitness goals, FitGo is well on its way to becoming a
        leading name in the fitness app market, empowering people to lead
        healthier lives.
      </p>
    </div>
  );
};

export default FitGo;
