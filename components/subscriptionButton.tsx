import { useSession } from "next-auth/react";
import { Button } from "./ui/button";


export default function subscriptionButton() {
    const { data : session } = useSession();


    if (session) {
      return (
        <div className="relative">
          <Button variant="default" size="default"  className="text-white bg-teal-400 rounded-full hover:bg-purple-500 "  >    
               Upgrade to premium 
          </Button>

        </div>
      );
    }

    return(
        <>
        </>
    );
}

