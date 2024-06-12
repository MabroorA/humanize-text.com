import { auth } from "@/lib/auth";
import prisma from "@/lib/db"
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";



export async function POST(req:any){
     await  prisma.$connect;

     const body = await req.text();

     const signature = headers().get("stripe-signature") ;

     let event: Stripe.Event;
     let data: Stripe.Checkout.Session;
     let eventType: string;
     // data = event!.data;
     // eventType = event!.type;

     // const session = event!.data.object as Stripe.Checkout.Session;

     // check the webhook is strips
     try {
          event = stripe.webhooks.constructEvent(
               body,
               signature!,
               process.env.STRIPE_WEBHOOK_SECRET!,
          );
    
     } catch (error) {
          return new NextResponse("invalid signature",{status:400})
          
     }
     
     data = event.data.object as Stripe.Checkout.Session;
     eventType = event.type;

     

     // console.log("eventType", eventType);
     // console.log("session", session);
     try {
          switch (eventType) {
               case 'checkout.session.completed': {
                    // (1) first payment is successful and a payment is made
                    // (2) User should be given access to product
                    console.log("PAYMENT SESSION COMPLETED")
                    console.log("DATA OBJECT", data)
                    
                    const checkout_session = await stripe.checkout.sessions.retrieve(data.id, {
                         expand:["line_items"]
                    });
                    console.log("THE SESSIONN ID  I GOT ",checkout_session)

                    if (checkout_session.customer) {
                         const customerId = checkout_session.customer as string;
                         const customer = await stripe.customers.retrieve(customerId);
                         console.log("CUSTOMER ID", customerId);
                         console.log("CUSTOMER", customer);
                       } else {
                         console.log("No customer associated with this session.");
                       }
                    //(2) User should be given access to product
                    //// find user by strip email, check with db email, if match give them access

                    

                    // GIVE USER ACCESS
                    // for now just give them 1 million credits(USER ALREADY LOGGED IN FOR NOW)

                    // get user email from Stripe session
                    const userEmail = checkout_session.customer_details?.email;
                    if (!userEmail) {
                         console.error("No email found in STRIPE CHECKOUT session");
                         return new NextResponse("No email found in session", { status: 400 });
                    }

                    // Update user credits
                    const updatedUser = await prisma.user.update({
                         where: { email: userEmail },
                         data: { credits: 1000000 },
                    });

                    if (!updatedUser) {
                         console.error("User not found");
                         return new NextResponse("User not found", { status: 404 });
                    }

                    console.log("User credits updated", updatedUser);
                    break;

               }

               default:
               //unhandled event type
          }
          return new NextResponse("Event handled", { status: 200 });
     } catch (e) {
          console.error("Internal server error:", e);
          return new NextResponse("Internal server error", { status: 500 });
          
     }
     
}