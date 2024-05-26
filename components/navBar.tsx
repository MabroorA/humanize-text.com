'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logoIcon from "../public/clean-logo.png"


export default function navBar() {
  return (
    <nav className=" text-1xl flex flex-row justify-between bg-origin-padding p-3 text-white ">
        <div className="">
          <Image
          src={logoIcon}
          width={200}

          alt="logo"
          priority
          />
        </div>
        <div className="flex ">
          <div className="hover:text-purple-500 p-2">
            Demo
          </div>

          <div className="hover:text-purple-500 p-2">
            Pricing
          </div>
          <div className=" px-1">
            
            <AuthButton/>
          </div>
        </div>
      </nav>
  );
}

