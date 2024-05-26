

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
          <Button variant="default" size="icon" onClick={handleUserNameClick} >
            <img
            className=" border-1 border-green-500 rounded"
            src={session.user?.image || "no image"}
            alt="user image"
            />           
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
        <Button variant="secondary"  onClick={() =>signIn()}>Sign in</Button>
        </>
    );
}
