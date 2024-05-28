'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logo from "../public/2nd-logo.png"
import Link from "next/link";


export default function navBar() {
  return (
    <nav className=" text-1xl flex flex-row justify-between bg-origin-padding p-3 text-white ">
        <div className="">
          <Image
          src={logo}
          width={200}

          alt="logo"
          priority
          />
        </div>
        <div className="flex flex-row justify-around ">
          <div className="hover:text-purple-500 p-2 ">
            Features
          </div>

          <Link className="hover:text-purple-500 p-2 px-8 " href='#pricing'  >
            Pricing
          </Link>
          <div className=" px-1">
            
            <AuthButton/>
          </div>
        </div>
      </nav>
  );
}

