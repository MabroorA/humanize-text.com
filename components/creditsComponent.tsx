import { getUserCredits } from '@/app/actions';
import React from 'react'

async function CreditsComponent() {
    const credits = await getUserCredits();
  return (
    <p className="text-2xl text-center text-black">
        Credits
        <span className="p-1 text-white bg-black border rounded-lg w-fit">
          {credits}
          </span> 
    </p>
  )
}

export default CreditsComponent