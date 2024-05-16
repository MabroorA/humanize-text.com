import { Button } from "@/components/ui/button";




export default function Home() {
  return (
    <>
    <main className=" max-w-7xl max-h-lvh mx-auto p-3">
      <nav className=" flex flex-row justify-between bg-origin-padding p-3 text-white">
        <div className=" hover:text-white">Humanize</div>
        <div className="flex">
          <div className="hover:text-white px-3">Pricing</div>
          <div className="hover:text-white px-3">Login</div>
        </div>
      </nav>
      <section className="flex flex-row justify-between py-32 ">
        <div className="flex flex-col justify-left min-h-16 w-3/5">
          <div className=" text-left mt-4 p-2">
            <h1 className=" text-6xl leading-none  text-white font-sans font-extrabold py-4 min">
              Humanize text <br/>&<br/> remove<br/> 
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500">
                AI DETECTION
              </span>
            </h1>
            <p className="text-white">
            The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.
            </p>
          </div>
          <div className="p-2">
            <Button size="lg" className=" bg-green-500 text-black-700 rounded">Get Humanize</Button>
          </div>
        </div>

        <div className="flex flex-col justify-between min-h-16 w-2/5">
          <div className=" bg-violet-700 rounded border-2 border-white min-h-full text-center text-white font-black ">
            
            video will go here
          </div>

        </div>
      </section>
    </main>
    </>
  );
}