'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logo from "../public/black-logo.png"
import Link from "next/link";
import SubscriptionButton from "./subscriptionButton";
import DashboardLink from "./dashboardLink";
import { Session } from "next-auth";

import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";





export default function NavBar({
  session
}: {
  session: Session | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row justify-between p-3 text-black bg-origin-padding">
      <Link href='/' className="justify-start w-32 md:w-48">
        <Image
          src={logo}
          alt="logo"
          priority
        />
      </Link>

      <div className="flex flex-col items-center justify-start lg:space-x-2 md:flex-row">
          <div className="md:hidden">
            <RiMenu5Fill size={35} className="font-bold text-teal-900 cursor-pointer " onClick={toggleMenu} />
          </div>
          <div className={`lg:space-x-8 flex flex-col justify-center md:flex-row md:items-center absolute md:static top-full right-0 bg-origin-padding md:bg-transparent z-50 md:z-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
            <div className="p-2 hover:text-purple-500">
              {/* <CreditsComponent/> */}
            </div>
            <div className="p-2 hover:text-purple-500" >
              <DashboardLink session={session} />
            </div>
            {/* <Link className="p-2 hover:text-purple-500" href='#features'>
              Features
            </Link> */}
            <Link className="p-2 hover:text-purple-500" href='/pricing'>
              Pricing
            </Link>
            <Link className="hidden md:visible md:px-2 md:hover:text-purple-500" href='#pricing'>
              <SubscriptionButton session={session} />
            </Link>
            <div className="hidden md:visible md:px-2 md:hover:text-purple-500">
              <AuthButton session={session} />
            </div>
            
          </div>
          <div className="flex-row justify-end hidden px-1 md:flex lg:block">
              <AuthButton session={session} />
          </div>  
      </div>
      
    </nav>
  );
}

