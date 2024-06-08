import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";







export default async function Page () {
    const session = await auth();
    const user = session?.user; 
    const userName = session?.user?.name;

    if (!user) {
        redirect("/api/auth/signin?")
      }


    return (
        <div className="flex flex-col p-3 space-y-2 text-white ">
            <div className="flex flex-row justify-between border-b-2 border-teal-600">
                <div>
                {userName}
                </div>
                <div className="p-2">
                    <Button variant="destructive">Sign out</Button>
                </div>

            </div>



        </div>
    )
}

