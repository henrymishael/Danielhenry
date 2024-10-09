"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavItem {
  id: number;
  name: string;
  url: string;
  slug: string;
}
const WorkNav = () => {
  const pathname = usePathname();

  const Bottomnav: NavItem[] = [
    {
      id: 1,
      name: "SABI Bank",
      url: "/works/sabi",
      slug: "sabi",
    },
    {
      id: 2,
      name: "Ounje Bazaar",
      url: "/works/ounje",
      slug: "ounje",
    },
    {
      id: 3,
      name: "FitGo",
      url: "/works/fitgo",
      slug: "fitgo",
    },
  ];

  return (
    <div className='flex flex-row items-center gap-6 justify-center py-12'>
      {Bottomnav.map((nav: NavItem) => {
        return (
          <Link
            key={nav.id}
            href={nav.url}
            className={cn`${
              pathname.includes(nav.name.toLowerCase().split(" ")[0]) &&
              "text-yellow-600"
            }
               "text-white/30"
           `}
          >
            {nav.name}
          </Link>
        );
      })}
    </div>
  );
};

export default WorkNav;
