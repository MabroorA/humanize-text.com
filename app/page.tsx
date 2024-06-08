"use client";
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import logoIcon from "../public/2nd-iteration-icon.png"
import demoGif from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"

import WhyHumanize from "@/components/whyHumanize";
import Pricing from "@/components/pricing";

import {TypeAnimation} from "react-type-animation"
import Features from "@/components/features";


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Home() {

  return (
    <>

      <section className="flex flex-col justify-center md:flex-row sm:flex-col lg:py-20 ">
        <div className="flex flex-col md:flex-col lg:w-2/5 ">
          <div className="text-center text-white text-middle md:text-left ">
            
            
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl md:leading-normal">

                Bypass
                <div className="rounded-lg ">
                  <TypeAnimation
                  className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500"
                  
                  sequence={[
                    
                    'ChatGPT', 
                    3000, 
                    'Turnit', 
                    3000, 
                    'GPTZero',
                    5000,
                    'Gemini',
                    5000,
                    () => {
                      console.log('Sequence completed');
                    },
                  ]}
                  repeat={Infinity}
                  speed={2}
                  deletionSpeed={20}
                  />
                </div> 
                AI DETECTION
            </h1>
            <p className="py-3 text-gray-400 lg:py-3 lg:pt-8 lg:text-lg sm:py-1 sm:pt-2 ">
            Save hours of writing in a click.
            </p>
            
          </div>
          <div className="hidden md:block">
            <Button size="xlg" variant="default" className="text-2xl text-black rounded-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400 ">
                Get Humanize
            </Button>
          </div>
        </div>
        
        <div className="mx-auto lg:w-3/5 sm:flex sm:flex-col sm:p-2 sm:max-w-screen-sm">
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
      {/* <div className="bg-black " id="pricing">
        <Pricing/>
      </div> */}
    </>
  );
}