import Image from "next/image";

import demoFeature from "../public/demo-feature.png"

export default function whyHumanize() {
  return (
    <div className="flex flex-col w-full py-20">
        <div>
            <h1 className="m-4 text-4xl text-center text-teal-500">
                why use Humanize ?
            </h1>
        </div>
        <div className="flex flex-row w-full text-white">
          <div className="flex flex-col w-1/2 p-2 text-center bg-black rounded-bl-2xl rounded-tl-2xl">
              <h1 className="text-2xl ">Humanize has unique Features </h1>
              <div className="p-2 text-left ">
                <ul>
                synonyms
                </ul>
                <ul>
                reword sentences or phrases
                </ul>
              </div>

          </div>
          <div className="w-1/2">
              <Image
              className="rounded-tr-2xl rounded-br-2xl "
              src={demoFeature }
              alt="image not loaded"
              />
          </div>
        </div>
    </div>
  );
}

