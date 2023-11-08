"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import StatusBox from "./components/statusBox";

import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

export default function packageDetail({
  params,
}: {
  params: {
    detailPackage: string;
  };
}) {
  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-full flex-col flex pb-80">
      <div className="">
        <Link href="/packageList-manOps">
          <img
            src="/arrow-left.svg"
            alt="back"
            className="ml-[40px] mt-[40px] w-[38px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
          />
        </Link>
      </div>
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[0px] lg:text-[48px] lg:mt-[48px] lg:mb-6 justify-center">
        Package Detail
      </h1>

      <StatusBox />

      <footer className="mt-[140px] lg:mt-[200px] overflow-hidden absolute -bottom-20 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
