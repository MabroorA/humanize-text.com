'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logo from "../public/2nd-logo.png"
import Link from "next/link";
import SubscriptionButton from "./subscriptionButton";
import DashboardLink from "./dashboardLink";
import { Session } from "next-auth";

import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";




export default function navBar({
  session
}: {
  session: Session | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-row justify-between p-3 text-white bg-origin-padding">
      <Link href='/' className="w-32 md:w-48">
        <Image
          src={logo}
          alt="logo"
          priority
        />
      </Link>
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:hidden">
          <RiMenu5Fill size={35} className="text-teal-400 cursor-pointer " onClick={toggleMenu} />
        </div>
        <div className={`flex flex-col md:flex-row md:items-center absolute md:static top-full right-0 bg-origin-padding md:bg-transparent z-50 md:z-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <Link className="p-2 hover:text-purple-500" href='/dashboard'>
            <DashboardLink session={session} />
          </Link>
          {/* <Link className="p-2 hover:text-purple-500" href='#features'>
            Features
          </Link> */}
          <Link className="p-2 hover:text-purple-500" href='/pricing'>
            Pricing
          </Link>
          <Link className="hidden md:visible md:px-2 md:hover:text-purple-500" href='/pricing'>
            <SubscriptionButton session={session} />
          </Link>
          <div className="px-1">
            <AuthButton session={session} />
          </div>
        </div>
      </div>
    </nav>
  );
}

