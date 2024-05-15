import { Button } from "@/components/ui/button";




export default function Home() {
  return (
    <>
    <main className=" max-w-7xl max-h-lvh mx-auto p-3 ">
      <nav className=" bg-slate-950 flex flex-row justify-between bg-origin-padding p-3 text-green-400">
        <div className=" hover:text-white">Humanize-Text</div>
        <div className="flex">
          <div className="hover:text-white px-3">Pricing</div>
          <div className="hover:text-white px-3">Login</div>
        </div>
      </nav>
      <div className="flex flex-row justify-between py-32 ">
        <div className="flex flex-col justify-left min-h-16">
          <div>
            <h1 className="text-5xl text-green-600 text-left mt-4 p-2 max-w-md">Remove-ai-detection and BYPASS detection </h1>
          </div>
          <div className="py-4">
            <Button size="lg" className=" bg-green-500 text-black-700">Get Humanize</Button>
          </div>
        </div>

        <div className="flex flex-col justify-between min-h-16">
          <textarea> Enter text to paraphrase here</textarea>
          <Button variant="default" size="lg">Paraphrase</Button>
        </div>

      </div>
    </main>
    </>
  );
}