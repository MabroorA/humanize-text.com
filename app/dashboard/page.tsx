
import ChatComponent from "@/components/chatComponent";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";




export default async function page() {

  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard")
  }


  return (
    <>
      <h1 className='text-4xl font-bold text-center text-teal-800'>Dashboard</h1>
      <ChatComponent/>
    </>
  )
}

