import Image from "next/image";

import demoimage from "../public/demo-vid-ezgif.com-video-to-gif-converter.gif"

export default function whyHumanize() {
  return (
    <div className="flex flex-col justify-between  border">
        <div>
            <h1 className=" text-4xl text-teal-500 ">
                why use Humanize ?
            </h1>
        </div>
        <div >
        <Image
        
        src={demoimage || " "}
        alt="image not loaded"
        />
        </div>
    </div>
  );
}

