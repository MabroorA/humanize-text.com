import Pricing from '@/components/pricing'
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

async function Page() {
  const session =  await auth();
  const user = session?.user

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/pricing");

  }
  return (
    <div className=''>
      
      <Pricing/>
    </div>
  )
}

export default Page