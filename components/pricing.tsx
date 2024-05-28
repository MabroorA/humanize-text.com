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

        <div className='flex flex-row justify-around pb-12  '>
            <div className=" bg-[#212121] border rounded-lg flex flex-col justify-normal text-left  p-5 ">
                <h4 >Starter</h4>
                <div className="flex flex-row ">
                    <p className=" text-gray-400 line-through mt-6 ">29.99</p>
                    <h1 className=' bg-inherit text-5xl font-black'>£19.99</h1>
                </div>
                
                <div className=" text-white py-4 ">
                    <p className="py-3 flex flex-row"><Check size={28} color="white" weight="regular" /> 5k words limit</p>
                    <p className="py-3 flex flex-row"><Check size={28} color="white" weight="regular" />  1000 words per request</p>
                    <p className="py-3 flex flex-row"><Check size={28} color="white" weight="regular" />  Standard and Fluency mode</p>
                    <p className=' text-gray-500 py-3 flex flex-row'><X size={28} color="gray" weight="regular" />no Access to paraphrasing history</p>
                    <p className='text-gray-500 py-3 flex flex-row'><X size={28} color="gray" weight="regular" />50+ Languages Supported</p>
                </div>
                <Button className="text-2xl text-white font-medium bg-teal-500 min-w-64 ">Buy now</Button>
                
                
            </div>

            <div className=" bg-[#212121] border-2 border-teal-400 rounded-lg flex flex-col justify-normal text-left  p-5 " >
                <h4 >Pro</h4>
                <div className="flex flex-row ">
                    <p className=" text-gray-400 line-through mt-6 ">59.99</p>
                    <h1 className=' bg-inherit text-5xl font-black'>£49.99</h1>
                </div>
                
                <div className=" text-white py-4">
                    <p className="py-3 flex flex-row"><Check size={28} color="#42BEA0" weight="regular" />  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-violet-500 font-black">Unlimited </span>-Word limit</p>
                    <p className="py-3 flex flex-row"><Check size={28} color="#42BEA0" weight="regular" />  1000 words per request</p>
                    <p className="py-3 flex flex-row"><Check size={28} color="#42BEA0" weight="regular" />  Access to all 5 writing modes</p>
                    <p className="py-3 flex flex-row"><Check size={28} color="#42BEA0" weight="regular" />  Access to paraphrasing history</p>
                    <p className="py-3 flex flex-row"><Check size={28} color="#42BEA0" weight="regular" />  50+ Languages Supported</p>
                </div>
                <Button className="text-2xl text-white font-medium bg-clip bg-gradient-to-r from-teal-300 to-violet-600 min-w-64 hover:bg-purple-600 ">Buy now</Button>
                
            </div>
        </div>
    </div>
    </>
  )
}

