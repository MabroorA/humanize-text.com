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

      <section className="flex lg:flex-row sm:flex-col justify-center  lg:py-20 ">
        <div className="flex flex-col justify-between lg:w-2/5   ">
          <div className="lg:text-left text-white  sm:text-center">
            
            
            <h1 className="lg:text-6xl sm:text-5xl font-extrabold leading-normal">

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
            <p className="lg:py-3 lg:pt-8 lg:text-lg text-gray-400 sm:py-1 sm:pt-2 ">
            The anti artificial intelligence tool that save hours of writing in a click.
            </p>
            
          </div>
          <div className=" hidden lg:block">
            <Button size="xlg" variant="default" className="text-2xl text-black rounded-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400 ">
                Get Humanize
            </Button>
          </div>
        </div>
        
        <div className="lg:w-3/5 sm:flex sm:flex-col sm:p-2 sm:max-w-screen-sm mx-auto">
          <Image
          className="w-full rounded-2xl "
          src={demoGif}
          alt="image not loaded"
          />
          <div className="lg:hidden sm:flex sm:flex-row sm:justify-center p-3">
            <Button size="xlg" variant="default" className=" lg:text-xl sm:text-lg text-black rounded-lg bg-clip bg-gradient-to-r from-teal-400 to-violet-400 ">
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