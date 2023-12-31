"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("kepencet");
    setNav(!nav);
  };

  console.log(nav);
  return (
    <div className="h-[100px]">
      <div className="bg-[#2E3362] w-full flex justify-between items-center p-4 fixed">
        <div className="ml-[100px]">
          <Link href="/">
            <img src="/Home/Logo.png" alt="Logo" />
          </Link>
        </div>

        <div onClick={handleNav} className="block sm:hidden z-40">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          className={`sm:hidden absolute top-0 ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] h-screen bg-[#14037D] text-center text-white`}
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <Link href="/about">Package List</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/branch-office">Delivery Staff List</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/blog">Help</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
