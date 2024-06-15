
import ChatComponent from "@/components/chatComponent";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserCredits, reduceUserCredits } from "../actions";
import CreditsComponent from "@/components/creditsComponent";




export default async function Page() {

  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");

  }
  const credits = await getUserCredits();

  

  return (
    <>
      <h1 className='p-6 text-5xl font-black text-center text-teal-800'>
        Dashboard
      </h1>
      <CreditsComponent/>

      <ChatComponent credits={credits}  />
    </>
  )
}

