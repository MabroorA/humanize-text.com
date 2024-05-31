'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logo from "../public/2nd-logo.png"
import Link from "next/link";
import { redirect } from "next/navigation";


export default function navBar() {
  return (
    <nav className="flex flex-row justify-between p-3 text-white text-1xl bg-origin-padding">
        <div className="" >
          <Image
          onClick={redirect("/")}
          src={logo}
          width={200}

          alt="logo"
          priority
          />
        </div>
        <div className="flex flex-row justify-around ">
          <Link className="p-2 hover:text-purple-500 " href='#features'>
            Features
          </Link>

          <Link className="p-2 px-8 hover:text-purple-500 " href='#pricing'  >
            Pricing
          </Link>
          <div className="px-1 ">
            
            <AuthButton/>
          </div>
        </div>
      </nav>
  );
}

