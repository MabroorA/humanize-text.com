import { Button } from "@/components/ui/button";




export default function Home() {
  return (
    <>
    <main className=" max-w-7xl max-h-lvh mx-auto ">
      <nav className=" bg-slate-950 flex flex-row justify-between bg-origin-padding p-3 text-green-400">
        <div className=" hover:text-white">Humanize-Text</div>
        <div className="flex">
          <div className="hover:text-white px-3">Pricing</div>
          <div className="hover:text-white px-3">Login</div>
        </div>
      </nav>
      <div className="flex flex-row justify-between  py-32">
        <div>
        <h1 className="text-5xl text-green-600 text-center mt-4">Remove-ai-detection </h1>
        </div>

        <div className="flex flex-col ">

          <textarea> Enter text to paraphrase here</textarea>
          <Button variant="default" size="lg">Paraphrase</Button>
        </div>

      </div>
    </main>
    </>
  );
}