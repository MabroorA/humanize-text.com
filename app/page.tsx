import Positives from "@/components/positives";
import { Button } from "@/components/ui/button";

import Image from 'next/image'
import logoIcon from "../public/2nd-iteration-icon.png"
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>

      <section className="flex flex-row justify-between py-32 ">
        <div className="flex flex-col justify-left min-h-16 w-3/5 ">
          <div className=" text-left mt-4 p-2">
            <h1 className=" text-6xl leading-none  text-white font-sans font-extrabold py-4 min">
              Humanize text <br/>&<br/> remove<br/> 
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500">
                AI DETECTION
              </span>
            </h1>
            <p className="text-white py-8">
            Seamlessly eliminate AI detection barriers
            </p>
          </div>
          
          <div className="p-2 ">
            
            <Button size="xlg" variant="default" className=" text-1xl text-black-700 font-medium  bg-purple-300 hover:bg-purple-500 ">
              <Image
                className="bg-transparent m-1"
                src={logoIcon}
                width={24}
                alt="logo"
                priority
              />
               
              Get Humanize
            </Button>
          </div>
          
          <p className="text-white">$100 off for first 3360 customers</p>
        </div>

        <div className="flex flex-col justify-between min-h-16 w-2/5">
          <div className=" bg-violet-700 rounded border-2 border-white min-h-full text-center text-white font-black ">
            video will go here
          </div>

        </div>
      </section>
      <Positives/>
      <div className="bg-white" id="pricing">
        <Pricing/>
      </div>
    </>
  );
}