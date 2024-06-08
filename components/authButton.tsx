

import { signIn,signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Session } from "next-auth";
import Link from "next/link";

type AuthButtonProperties = {
  session: Session | null;
}
export default function AuthButton({
  session
}: AuthButtonProperties){
   
    const [showSignOut, setShowSignOut] = useState(false);

    const handleUserNameClick = () => {
      setShowSignOut(prevState => !prevState);

    };

    if (session) {
      return (
        <div className="relative">
          <Link href="/user">
            <Button variant="default" size="icon"  className="rounded-full"  >
              <img
              
              className="rounded-full"
              src={session.user?.image || "no image"}
              alt="user image"
              />           
            </Button>
          </Link>

          {/* {showSignOut && (
            <div className="absolute mt-2 top-full">
              {session.user?.name}<br/>
              {session.user?.email}
            <div className="absolute mt-2 top-full">
              <Button variant="destructive" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
            </div>

          )} */}
        </div>
      );
    }

    return(
        <>
        <Button variant="secondary"  onClick={() =>signIn()}>Sign in</Button>
        </>
    );
}
