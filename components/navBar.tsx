"use client";
import Link from "next/link";
import { signIn,signOut,useSession } from "next-auth/react";
import { Button } from "./ui/button";

function AuthButton(){

    const { data : session } = useSession();

    if (session){
        return(
            
            <>
            {session.user?.name }<br/>
            <Button onClick={() => signOut()}></Button>
            </>
        )
    }


    return(
        <>
        <Button onClick={() =>signIn()}>Sign in</Button>
        </>
    );
}

export default function navBar() {
  return (
    <nav className=" flex flex-row justify-between bg-origin-padding p-3 text-white">
        <div className=" hover:text-white">
          Humanize 
        </div>
        <div className="flex">
          <div className="hover:text-white px-3">Pricing</div>
          <div className="hover:text-white px-3">
          <AuthButton/>
          </div>
        </div>
      </nav>
  );
}

