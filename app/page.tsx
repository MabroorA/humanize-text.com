"use client";
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import logoIcon from "../public/2nd-iteration-icon.png"
import demoGif from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"

import WhyHumanize from "@/components/whyHumanize";
import Comparison from "@/components/positives";
import Pricing from "@/components/pricing";

import {TypeAnimation} from "react-type-animation"


export default function Home() {

  return (
    <>

      <section className="flex flex-col justify-between py-8 ">
        <div className="flex flex-col justify-center min-h-16  ">
          <div className=" text-center ">
            <h1 className=" text-6xl  text-white  font-extrabold py-3 ">
                Bypass 
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-violet-500 ">
                {" "} 

                <TypeAnimation
                sequence={[
                  
                  'AI DETECTION', 
                  3000, 
                  'Turnit DETECTION', 
                  3000, 
                  'ChatGPT DETECTION',
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                
                repeat={Infinity}
                speed={10}
                deletionSpeed={20}
                
                />

                
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center   min-h-full min-w-full  text-center m-4 ">
        
          <Image
          
          src={demoGif}
          alt="image not loaded"
          />
        </div>
        <div className="flex flex-row justify-center  p-2 ">
            
            <Button size="xlg" variant="default" className="  text-2xl text-black font-bold  bg-clip  bg-gradient-to-r from-teal-300 via-white to-violet-500">
              
              <Image
                className="bg-transparent m-1"
                src={logoIcon}
                width={30}

                alt="logo"
                priority
              />
              Get Humanize
            </Button>
          </div>
        
      </section>
      <WhyHumanize/>
      <div id="features">
        <Comparison/>
      </div>
      <div className=" bg-black " id="pricing">
        <Pricing/>
      </div>
    </>
  );
}