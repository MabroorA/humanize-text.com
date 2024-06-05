"use client";

import { Button } from "./ui/button";
import { Session } from "next-auth";

type SubscriptionButtonProperties = {
  session: Session | null;
}

export default function SubscriptionButton({
  session
}: SubscriptionButtonProperties) {

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

