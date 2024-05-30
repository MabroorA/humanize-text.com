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

      <section className="flex flex-row justify-between pt-20 ">
        <div className="flex flex-col justify-center ">
          <div className="text-left text-white ">
            <h1 className="text-5xl font-extrabold ">
                Save hours of writing <br/>Bypass 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-500 ">
                {" "}
                
                <TypeAnimation
                
                sequence={[
                  
                  'AI', 
                  3000, 
                  'Turnit', 
                  3000, 
                  'GPT',
                  5000,
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                repeat={Infinity}
                speed={10}
                deletionSpeed={20}
                />
                DETECTION
                
              </span>

            </h1>
            <p className="py-3 pt-8 text-2xl">
            Save hours of writing
            </p>
            
          </div>
          <div className="pt-8 ">
            <Button size="xlg" variant="default" className="text-2xl text-black bg-clip bg-gradient-to-r from-teal-300 to-violet-500 ">
                Get Humanize
            </Button>
          </div>
        </div>
        

        <div className="flex flex-col items-center ">
          <Image
          className="w-full p-2 rounded-2xl"
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
            <Button size="xlg" variant="default" className="text-2xl text-black bg-clip bg-gradient-to-r from-teal-300 to-violet-500">

              Get Humanize
            </Button>
          </div> */}
        
      </section>
      <WhyHumanize/>
      <div id="features">
        <Comparison/>
      </div>
      <div className="bg-black " id="pricing">
        <Pricing/>
      </div>
    </>
  );
}