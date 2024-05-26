
export default function pricing() {
  return (
    <>
    <div className='flex flex-col justify-center text-center text-white'>
        <div className='text-5xl font-medium text-green-400 p-4'>
            pricing
        </div>
        <h1  className='p-4'>Save hours of repetitive code, ship fast, get profitable!</h1>
        <h3 className='py-8' >
            <span className='text-green-500'>say save 100 </span>to be the first 3000 customers
        </h3>

        <div className='flex flex-row justify-around '>
            <div className="border rounded flex flex-col justify-normal text-left  min-h-12 min-w-40 pl-20 pr-40 pt-10 pb-10 space-y-4 bg-green-500">
                <h4 className=" bg-inherit">Starter</h4>
                <h1 className=' bg-inherit text-5xl'>£19.99</h1>
                <div className="bg-inherit text-black">
                    <p className=' bg-inherit'>20k words limit</p>
                    <p className=' bg-inherit'>20k words limit</p>
                    <p className=' bg-inherit'>20k words limit</p>
                    <p className=' bg-inherit'>20k words limit</p>
                    <p className=' bg-inherit'>20k words limit</p>
                </div>
                
                <p className=' bg-inherit'>Card Footer</p>
                
            </div>

            <div className="border rounded flex flex-col justify-start text-left min-h-32 min-w-40 pl-20 pr-40 pt-10 space-y-4 bg-purple-500" >
                <h4 className=' bg-inherit'>Pro</h4>
                <h1 className=' bg-inherit text-5xl'>£49.99</h1>
                <div className="bg-inherit text-black">
                    <p className=' bg-inherit'>50k words limit</p>
                    <p className=' bg-inherit'>50k words limit</p>
                    <p className=' bg-inherit'>50k words limit</p>
                    <p className=' bg-inherit'>50k words limit</p>
                    <p className=' bg-inherit'>50k words limit</p>
                </div>
                <p className=' bg-inherit'>Card Footer</p>
                
            </div>
        </div>
    </div>
    </>
  )
}

