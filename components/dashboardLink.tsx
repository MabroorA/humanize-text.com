import { useSession } from 'next-auth/react';
import React from 'react'

import Link from 'next/link';

function DashboardLink() {
    const { data : session } = useSession();


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