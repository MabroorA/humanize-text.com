import { Button } from "./ui/button";


import { Check,X } from "@phosphor-icons/react/dist/ssr";


export default function Pricing() {
  return (
    <>
    <div className='flex flex-col justify-center text-center text-white '>
        <div className='p-6 text-3xl text-teal-400'>
            Pricing
        </div>
        <h1  className='text-3xl font-bold md:text-4xl '>Save hours of writing,<br/>bypass ai detection in an instant!</h1>
        <h3 className='py-4 md:py-8' >
            <span className='font-medium text-teal-500'>Save 50% </span>now with your first 5k words  
        </h3>
        {/* PRICING CARDS */}
        <div className='flex flex-col justify-center pb-12 space-y-4 md:space-y-0 md:justify-around md:flex-row md:w-full'>
            <div className="bg-[#212121] border rounded-lg flex flex-col w-4/5 md:w-1/3 mx-auto md:justify-normal text-left p-5 md:transition-transform md:transform md:hover:scale-105">
                <h4>Starter</h4>
                <div className="flex flex-row">
                    <p className="mt-6 text-gray-400 line-through">29.99</p>
                    <h1 className='text-4xl font-black md:text-5xl bg-inherit'>£19.99</h1>
                </div>
                <div className="py-4 text-white">
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">5k words limit</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">1000 words per request</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">Standard and Fluency mode</span>
                    </p>
                    <p className="flex flex-row items-center py-3 text-gray-500">
                        <X size={28} color="gray" weight="regular" />
                        <span className="ml-3">No Access to paraphrasing history</span>
                    </p>
                    <p className="flex flex-row items-center py-3 text-gray-500">
                        <X size={28} color="gray" weight="regular" />
                        <span className="ml-3">50+ Languages Supported</span>
                    </p>
                </div>
                <Button className="w-full px-4 text-2xl font-medium text-white bg-teal-500 md:min-w-64">Buy now</Button>
            </div>
            
            {/* CARD */}
            <div className="bg-[#212121] border-2 border-teal-400 rounded-lg flex flex-col w-4/5 md:w-1/3 mx-auto md:justify-normal text-left p-5 md:transition-transform md:transform md:hover:scale-105">
                <h4>Pro</h4>
                <div className="flex flex-row">
                    <p className="mt-6 text-gray-400 line-through">59.99</p>
                    <h1 className='text-4xl font-black text-teal-300 md:text-5xl bg-inherit'>£49.99</h1>
                </div>
                <div className="py-4 text-white">
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3 font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">Unlimited</span>
                        -Word limit
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">1000 words per request</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">Access to all 5 writing modes</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">Access to paraphrasing history</span>
                    </p>
                    <p className="flex flex-row items-center py-3">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">50+ Languages Supported</span>
                    </p>
                </div>
                
                <Button className="w-full px-4 text-2xl font-medium text-white bg-gradient-to-r from-teal-300 to-violet-600 hover:from-purple-600 hover:to-purple-700 md:min-w-64">Buy now</Button>
            </div>

        </div>

    </div>
    </>
  )
}

