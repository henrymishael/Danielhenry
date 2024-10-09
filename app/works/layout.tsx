import { lato } from "@/font";
import WorkNav from "@/modules/works/workId";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${lato.className} text-brand-text container px-8 md:px-10`}
    >
      {/* <WorkId /> */}
      {children}
      <div className='mt-12'>
        <WorkNav />
      </div>
    </div>
  );
}
