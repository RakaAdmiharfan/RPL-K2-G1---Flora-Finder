"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import EditFormComponent from "./Components/crudForm";

import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

export default function PropertyPage({
  params,
}: {
  params: {
    detailStaf: string;
  };
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
  }, [pathname, searchParams]);

  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-content flex-col flex items-center justify-center pb-20">
      <div className="title">
        <h2 className="text-[#3D688E] text-[48px] font-bold font-Montserrat text-center mt-[74px]">
          Delivery Staff Detail
        </h2>
      </div>
      <div className="Box mt-[48px]">
        <EditFormComponent />
      </div>
    </div>
  );
}
