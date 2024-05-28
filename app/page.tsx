import Positives from "@/components/positives";
import Pricing from "@/components/pricing";

import { Button } from "@/components/ui/button";

import Image from 'next/image'
import logoIcon from "../public/2nd-iteration-icon.png"
import WhyHumanize from "@/components/whyHumanize";



export default function Home() {
  return (
    <>

      <section className="flex flex-col justify-between py-8 ">
        <div className="flex flex-col justify-center min-h-16  ">
          <div className=" text-center ">
            <h1 className=" text-6xl  text-white font-mono font-extrabold py-3 ">
                Bypass 
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-violet-500">
                {" "}AI DETECTION
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col min-h-16 ">
          <video className=" bg-teal-500 rounded-lg  min-h-full text-center m-4 mx-10">
           <source src={"../video/demo-vid.mp4"} type="video/mp4"/> 
          </video>
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
      <Positives/>
      <div className="bg-white" id="pricing">
        <Pricing/>
      </div>
    </>
  );
}