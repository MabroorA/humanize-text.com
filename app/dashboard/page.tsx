
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
      <h1 className='text-3xl font-bold text-center text-transparent  bg-clip-text bg-gradient-to-r from-green-600 to-purple-400'>Dashboard</h1>
      <ChatComponent/>
    </>
  )
}

