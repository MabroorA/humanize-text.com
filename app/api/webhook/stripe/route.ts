import prisma from "@/lib/db"



export async function POST(){
     await  prisma.$connect;
}