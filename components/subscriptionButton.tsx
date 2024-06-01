import { useSession } from "next-auth/react";
import { Button } from "./ui/button";


export default function SubscriptionButton() {
    const { data : session } = useSession();


    if (session) {
      return (
        <div className="relative">
          <Button variant="default" size="default"  className="text-base text-white bg-teal-500 rounded-full hover:bg-purple-500"  >    
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
