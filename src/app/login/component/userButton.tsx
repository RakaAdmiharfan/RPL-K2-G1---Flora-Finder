"use client";

import React from "react";
import { useState } from "react";

export default function UserButton() {
  const [borderColor, setBorderColor] = useState("black");

  const onClick = () => {
    if (borderColor === "black") {
      setBorderColor("blue"); // Change the border color to blue on click
    } else {
      setBorderColor("black"); // Change the border color back to black
    }
    console.log("clicked");
  };

  return (
    <div onClick={onClick} className="flex flex-row gap-[13px] mx-auto w-fit">
      <div className="flex flex-col justify-center items-center border border-black w-[170px] h-[170px] rounded-[10px]">
        <img src="/delivery.png" />
        <p className="mt-[15px]">Delivery Staff</p>
      </div>
      <div className="flex flex-col justify-center items-center border border-black w-[170px] h-[170px] rounded-[10px]">
        <img src="/manOps.png" />
        <p className="mt-[15px]">Ops Manager</p>
      </div>
    </div>
  );
}
