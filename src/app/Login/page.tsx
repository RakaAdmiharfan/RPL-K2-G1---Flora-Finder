"use client";
import Image from "next/image";
import Navbar from "../Components/navbar";
import SideNav from "../Components/sidenav";
import LoginForm from "@/app/login/component/loginform";
import UserButton from "./component/userButton";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="relative overflow-hidden flex flex-col md:flex-col lg:flex-col bg-white w-full h-full pb-36 lg:pb-72 lg:pt-[43px]">
      <nav className="lg:hidden">
        <Navbar />
      </nav>
      {/* <nav className="">
        <SideNav />
      </nav> */}
      <h1 className="flex justify-center items-center text-[#3D688E] font-montserrat text-2xl lg:text-[48px] font-bold leading-normal tracking-wide mb-[54px]">
        Choose Account Type
      </h1>
      <div>
        <UserButton />
      </div>
      <div className="mt-[56px] mb-[42px]">
        <h2 className="flex justify-center items-center text-[#528BBE] text-center lg:text-[24px] font-montserrat text-base font-regular leading-normal tracking-tight">
          Hello User!{" "}
        </h2>
        <h2 className="flex justify-center items-center text-[#528BBE] text-center lg:text-[24px] font-montserrat text-base font-regular leading-normal tracking-tight">
          Please out the form below
        </h2>
      </div>
      <div className="flex ml-[26px] lg:ml-[470px]">
        <LoginForm />
      </div>
      <footer className="mt-[93px] lg:mt-[200px] overflow-hidden absolute -bottom-20 lg:bottom-[-340px]">
        <img src="Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
