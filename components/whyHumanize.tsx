import Image from "next/image";

import demoFeature from "../public/demo-feature.png"

export default function whyHumanize() {
  return (
    <div className="flex flex-col items-center ">
        <div>
            <h1 className=" text-4xl text-teal-500 m-4">
                why use Humanize ?
            </h1>
        </div>
        <div className="border">
        <Image
        
        src={demoFeature }
        alt="image not loaded"
        />
        </div>
    </div>
  );
}

