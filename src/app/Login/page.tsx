"use client";
import Image from "next/image";
import Navbar from "../Components/navbar";
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
    <div className="relative overflow-hidden flex flex-col md:flex-row bg-white w-full h-full pb-36">
      <nav>
        <Navbar />
      </nav>
      <h1 className="flex justify-center items-center text-[#3D688E] font-montserrat text-2xl font-semibold leading-normal tracking-wide mb-[54px]">
        Choose Account Type
      </h1>
      <div>
        <UserButton />
      </div>
      <div className="mt-[56px] mb-[42px]">
        <h2 className="flex justify-center items-center text-[#528BBE] text-center font-montserrat text-base font-regular leading-normal tracking-tight">
          Hello User!{" "}
        </h2>
        <h2 className="flex justify-center items-center text-[#528BBE] text-center font-montserrat text-base font-regular leading-normal tracking-tight">
          Please out the form below
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <LoginForm />
      </div>
      <footer className="mt-[93px] overflow-hidden absolute -bottom-20">
        <img src="Footer.png" />
      </footer>
    </div>
  );
}
