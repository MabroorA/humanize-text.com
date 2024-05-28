import { Button } from "./ui/button";


import { Check,CheckFat,X } from "@phosphor-icons/react/dist/ssr";


export default function pricing() {
  return (
    <>
    <div className='flex flex-col justify-center text-center text-white '>
        <div className='text-4xl text-teal-400 p-6'>
            Pricing
        </div>
        <h1  className='text-4xl font-bold '>Save hours of writing,<br/>bypass ai detection in an instant!</h1>
        <h3 className='py-8' >
            <span className='text-teal-500 font-medium'>Save 50% </span>now with your first 5k words  
        </h3>

        <div className='flex flex-row justify-around pb-12'>
            <div className="bg-[#212121] border rounded-lg flex flex-col justify-normal text-left p-5">
                <h4>Starter</h4>
                <div className="flex flex-row">
                    <p className="text-gray-400 line-through mt-6">29.99</p>
                    <h1 className='bg-inherit text-5xl font-black'>£19.99</h1>
                </div>
                <div className="text-white py-4">
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">5k words limit</span>
                    </p>
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">1000 words per request</span>
                    </p>
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="white" weight="regular" />
                        <span className="ml-3">Standard and Fluency mode</span>
                    </p>
                    <p className="py-3 flex flex-row items-center text-gray-500">
                        <X size={28} color="gray" weight="regular" />
                        <span className="ml-3">No Access to paraphrasing history</span>
                    </p>
                    <p className="py-3 flex flex-row items-center text-gray-500">
                        <X size={28} color="gray" weight="regular" />
                        <span className="ml-3">50+ Languages Supported</span>
                    </p>
                </div>
                <Button className="text-2xl text-white font-medium bg-teal-500 min-w-64">Buy now</Button>
            </div>

            <div className="bg-[#212121] border-2 border-teal-400 rounded-lg flex flex-col justify-normal text-left p-5">
                <h4>Pro</h4>
                <div className="flex flex-row">
                    <p className="text-gray-400 line-through mt-6">59.99</p>
                    <h1 className='bg-inherit text-5xl font-black'>£49.99</h1>
                </div>
                <div className="text-white py-4">
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-violet-500 font-black">Unlimited</span>
                        -Word limit
                    </p>
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">1000 words per request</span>
                    </p>
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">Access to all 5 writing modes</span>
                    </p>
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">Access to paraphrasing history</span>
                    </p>
                    <p className="py-3 flex flex-row items-center">
                        <Check size={28} color="#42BEA0" weight="regular" />
                        <span className="ml-3">50+ Languages Supported</span>
                    </p>
                </div>
                <Button className="text-2xl text-white font-medium bg-clip bg-gradient-to-r from-teal-300 to-violet-600 min-w-64 hover:bg-purple-600">Buy now</Button>
            </div>
        </div>

    </div>
    </>
  )
}

