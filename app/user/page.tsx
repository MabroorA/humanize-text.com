
import ButtonSignOut from "@/components/buttonSignOut";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";







export default async function Page () {

    const session = await auth();
    const user = session?.user; 
    const userName = session?.user?.name;
    const userEmail = session?.user?.email;
    

    if (!user) {
        redirect("/api/auth/signin?")
      }
    const getUserCredits = await prisma.user.findUnique({
        where: {
            id: user?.id!,
            email: user?.email! 
        },
        select: {
            credits: true
        }
    });
    const credits = getUserCredits?.credits ?? 'No credits available';

    console.log(getUserCredits)

    return (
        <div className="flex flex-col p-3 space-y-2 text-white ">
            <div className="flex flex-row justify-between p-3 border-b-2 border-teal-600">
                <div className="">
                {userName}
                </div>
                <div className="">
                    <ButtonSignOut/>
                </div>

            </div>
            <div className="p-3">
                {userEmail}
            </div>
            <div className="flex flex-row justify-between p-3">
                <div>Credits</div>
                <div className="text-lg ">{credits}</div>
            </div>



        </div>
    )
}

