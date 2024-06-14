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
    <nav className="relative flex flex-row justify-between py-5 mx-auto text-lg text-black max-w-7xl ">
      <Link href='/' className="w-32 md:w-48">
        <Image
          src={logo}
          alt="logo"
          priority
        />
      </Link>
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:hidden">
          <RiMenu5Fill size={35} className="text-teal-700 cursor-pointer " onClick={toggleMenu} />
        </div>
        <div className={`flex flex-col md:space-x-10 md:flex-row md:items-center absolute md:static top-full right-0  md:bg-transparent z-50 md:z-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <div className=" hover:text-teal-700" >
            <DashboardLink session={session} />
          </div>
          <Link className=" hover:text-teal-700" href='/pricing'>
            Pricing
          </Link>
          <div className="px-1">
            <AuthButton session={session} />
          </div>
        </div>
      </div>
    </nav>
  );
}

