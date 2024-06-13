
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import logoIcon from "../public/2nd-iteration-icon.png"
import demoGif from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"

import WhyHumanize from "@/components/whyHumanize";
import Pricing from "@/components/pricing";

import Features from "@/components/features";


import { PrismaClient } from '@prisma/client'
import TextAnimation from "@/components/textAnimation";
const prisma = new PrismaClient()

export default function Home() {

  return (
    <>

      <section className="flex flex-col justify-center md:flex-row lg:justify-between sm:flex-col lg:py-20 ">
        <div className="flex flex-col justify-between md:flex-col lg:w-2/5 ">
          <div className="text-center text-black text-middle md:text-left ">
            
            
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl md:leading-normal">

                Bypass
                <TextAnimation/>
                AI DETECTION
            </h1>
            <p className="py-3 text-gray-500 lg:py-3 lg:pt-8 lg:text-lg sm:py-1 sm:pt-2 ">
            Save hours of writing in a click.
            </p>
            
          </div>
          <div className="hidden md:block">
            <Button size="xlg" variant="default" className="text-2xl text-black rounded-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400 ">
                Get Humanize
            </Button>
          </div>
        </div>
        
        <div className=" lg:w-3/5 md:flex md:flex-col md:p-0 md:max-w-screen-sm">
          <Image
          className="w-full rounded-2xl "
          src={demoGif}
          alt="image not loaded"
          />
          <div className="flex flex-row justify-center p-3 md:hidden ">
            <Button size="lg" variant="default" className="text-black rounded-lg lg:text-xl sm:text-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400">
                Get Humanize
            </Button>
          </div>
        </div>
        
        
      </section>

      {/* <WhyHumanize/> */}
      {/* <div id="features">
        <Features/>
      </div> */}
      {/* <div className="" id="pricing">
        <Pricing />
      </div> */}
    </>
  );
}