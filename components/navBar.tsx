"use client";

import { signIn,signOut,useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { useState } from "react";

function AuthButton(){

    const { data : session } = useSession();
    const [showSignOut, setShowSignOut] = useState(false);

    const handleUserNameClick = () => {
      setShowSignOut(prevState => !prevState);

    };

    if (session) {
      return (
        <div className="relative">
          <Button variant="outline" onClick={handleUserNameClick}>
            {session.user?.name}
          </Button>
          {showSignOut && (
            <div className="absolute top-full mt-2">
              <Button variant="destructive" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      );
    }


    return(
        <>
        <Button variant="default"  onClick={() =>signIn()}>Sign in</Button>
        </>
    );
}

export default function navBar() {
  return (
    <nav className=" flex flex-row justify-between bg-origin-padding p-3 text-white ">
        <div className=" p-2 hover:text-purple-500 ">
          Humanize 
        </div>
        <div className="flex">
          <div className="hover:text-purple-500 p-2">
            Pricing
          </div>
          <div className=" px-3">
            <AuthButton/>
          </div>
        </div>
      </nav>
  );
}

