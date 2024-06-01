"use client";
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import logoIcon from "../public/2nd-iteration-icon.png"
import demoGif from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"

import WhyHumanize from "@/components/whyHumanize";
import Pricing from "@/components/pricing";

import {TypeAnimation} from "react-type-animation"
import Features from "@/components/features";


export default function Home() {

  return (
    <>

      <section className="flex flex-row w-full py-20 ">
        <div className="flex flex-col justify-between w-2/5 ">
          <div className="text-left text-white ">
            <h1 className="text-6xl font-extrabold leading-normal">
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
            <p className="py-3 pt-8 text-lg text-gray-400">
            The anti artificial intelligence tool that save hours of writing in a click.
            </p>
            
          </div>
          <div className="">
            <Button size="xlg" variant="default" className="text-2xl text-black rounded-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400 ">
                Get Humanize
            </Button>
          </div>
        </div>
        
        <div className="w-3/5">
          <Image
          className="w-full rounded-2xl "
          src={demoGif}
          alt="image not loaded"
          />
        </div>
        {/* <div className="flex flex-row justify-center p-2 ">
            <Image
                className="mx-4 bg-transparent"
                src={logoIcon}
                width={30}
                alt="logo"
                priority
              />
          </div> */}
        
      </section>
      {/* <WhyHumanize/> */}
      {/* <div id="features">
        <Features/>
      </div> */}
      <div className="bg-black " id="pricing">
        <Pricing/>
      </div>
    </>
  );
}