import { Button } from "@/components/ui/button";
import { BiColorFill } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";



export default function Home() {
  return (
    <>
    <main className=" max-w-7xl max-h-lvh mx-auto p-3">
      <nav className=" bg-slate-950 flex flex-row justify-between bg-origin-padding p-3 text-green-400">
        <div className=" hover:text-white">Humanize-Text</div>
        <div className="flex">
          <div className="hover:text-white px-3">Pricing</div>
          <div className="hover:text-white px-3">Login</div>
        </div>
      </nav>
      <section className="flex flex-row justify-between py-32 ">
        <div className="flex flex-col justify-left min-h-16 w-3/5">
          <div>
            <h1 className="text-5xl text-green-600 font-sans font-extrabold  text-left mt-4 p-2 ">
              Humanize your text to <span className=" bg-white text-green-500">remove ai detection</span>
            </h1>
          </div>
          <div className="py-4">
            <Button size="lg" className=" bg-green-500 text-black-700">Get Humanize</Button>
          </div>
        </div>

        <div className="flex flex-col justify-between min-h-16 w-2/5">
          <div className="bg-gray-300 min-h-20 min-w-20 rounded-lg p-4"> Enter text to paraphrase here</div>


          <div className="flex flex-row justify-between ">
            <div className="bg-gray-600 rounded w-5/6 p-2 text-white">Input text area</div>
            <Button variant="outline" size="icon" >
            <div>
              <CiSearch style={{color:"green", fontSize:25}}/>
            </div>
          </Button>
          </div>
          


        </div>
      </section>
    </main>
    </>
  );
}