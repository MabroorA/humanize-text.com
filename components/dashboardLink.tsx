
import React from 'react'

import Link from 'next/link';
import { Session } from 'next-auth';

type DashboardProperties = {
  session: Session | null;
}

function DashboardLink({
  session
}: DashboardProperties) {

    if (session) {
      return (
        <div className="relative">
          <Link href="/dashboard"  >    
               Dashboard 
          </Link>

        </div>
      );
    }
    return(
        <>
        </>
    );
  
}

export default DashboardLink