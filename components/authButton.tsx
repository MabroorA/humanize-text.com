

import { signIn,signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Session } from "next-auth";

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
          
          <Button variant="default" size="icon" onClick={handleUserNameClick} className="rounded-full"  >
            <img
            
            className="rounded-full"
            src={session.user?.image || "no image"}
            alt="user image"
            />           
          </Button>

          {showSignOut && (
            <div className="absolute top-full mt-2">
              {session.user?.name}<br/>
              {session.user?.email}
            <div className="absolute top-full mt-2">
              <Button variant="destructive" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
            </div>

          )}
        </div>
      );
    }

    return(
        <>
        <Button variant="secondary"  onClick={() =>signIn()}>Sign in</Button>
        </>
    );
}
