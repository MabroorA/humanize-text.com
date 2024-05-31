'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logo from "../public/2nd-logo.png"
import Link from "next/link";
import SubscriptionButton from "./subscriptionButton";
import DashboardLink from "./dashboardLink";


export default function navBar() {
  return (
    <nav className="flex flex-row justify-between p-3 text-white text-1xl bg-origin-padding">
        <Link href='/' >
          <Image
          src={logo}
          width={200}

          alt="logo"
          priority
          />
        </Link>
        <div className="flex flex-row justify-around ">
          <Link className="p-2 hover:text-purple-500 " href='/dashboard'>
            <DashboardLink/>
          </Link>
          <Link className="p-2 hover:text-purple-500 " href='#features'>
            Features
          </Link>

          <Link className="p-2 hover:text-purple-500 " href='#pricing'  >
            Pricing
          </Link>
          <Link className="px-2 hover:text-purple-500" href='/pricing'>
            <SubscriptionButton/>
          </Link>
          <div className="px-1 ">
            
            <AuthButton/>
          </div>
        </div>
      </nav>
  );
}

