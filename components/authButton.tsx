

import { signIn,signOut,useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function AuthButton(){
   
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
