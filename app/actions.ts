"use server";
import { auth } from "@/lib/auth"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";


// fetch user credits
export async function getUserCredits(): Promise<number> {
    const session = await auth();
    const user = session?.user; 
    if (!user) return 0;
    
    const userData = await prisma.user.findUnique({
        where: {
            id: user.id,
            email: user.email!
        },
        select: {
            credits: true
        }
    });
    
    return userData?.credits ?? 0;
}

// Reduce user credits
export async function reduceUserCredits(): Promise<number | null> {

    try {
        const session = await auth();
        const user = session?.user;
        const userId = user?.id
        const userEmail = user?.email!

        if (!user) return null;

        const updatedUserCredits = await prisma.user.update({
            where: {
                id: userId,
                email: userEmail,
            },
            data: {
                credits: {
                    decrement: 1,
                },
            },
        });
        console.log("FUNCTION")
        revalidatePath("/dashboard")

        return updatedUserCredits.credits;
    } catch (error) {
        console.error('Error reducing credits:', error);
        return null;
    }
}
