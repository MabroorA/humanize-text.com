"use client"
import { useChat } from 'ai/react';

import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { reduceUserCredits } from '@/app/actions';


interface ChatComponentProps {
    credits: number;


}


export default function ChatComponent({ credits: initialCredits, }: ChatComponentProps){


    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/chat',
      });
    
      const [credits, setCredits] = useState(initialCredits);
      const [count, setCount] = useState(0);
  
    const handleHumanizeButton = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (credits <= 0) {
        console.log("NO CREDITS");
        return; // Exit early if no credits
    }

    try {
        const newCredits = await reduceUserCredits();

        if (newCredits !== null) {
        setCredits(newCredits);
        setCount(count + 1);
        handleSubmit(event); // Call the original handleSubmit function
        } else {
        console.error('Failed to reduce credits');
        alert('Failed to reduce credits');
        }
    } catch (error) {
        console.error('Error reducing credits:', error);
        alert('Error reducing credits');
    }
    };

    return(
        <div>
            <div  className='flex flex-col py-4 space-y-4 md:space-x-5 md:space-y-0 md:justify-center md:w-full md:p-10 md:flex-row'>


                <form className='flex flex-col mx-auto w-4/5  md:flex-col md:justify-end md:w-1/2 md:h-96 bg-teal-600/35 backdrop-blur-lg  rounded-lg  md:m-0.5' onSubmit={handleHumanizeButton}>
                    <div className='flex-grow overflow-y-auto p-3 m-0.5'>
                    {messages
                        .filter(m => m.role === 'user') // Only display messages from the user
                        .map(m => (
                        <div key={m.id} className='p-2 mb-2 bg-white rounded'>
                            {m.content}
                        </div>
                    ))}
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between md:p-3 m-0.5 '>
                    <textarea
                        className='rounded  text-black md:w-full md:h-full px-2 m-0.5  bg-white  placeholder-black place-content-center  resize-none focus:outline-none focus:border-transparent'
                        value={input}
                        placeholder="Enter text to Humanize"
                        onChange={handleInputChange}
                    />
                    <Button 
                        onClick={() => setCount(count + 1)}
                        disabled={ credits<=0 } 
                        type='submit'  
                        variant="outline"  
                        className='bg-teal-500  md:h-full m-0.5 font-medium text-white bg-clip  bg-gradient-to-r from-teal-300 to-violet-500'
                        >
                        Humanize
                    </Button>
                    </div>

                </form>
                
                <div className='flex flex-col w-4/5 mx-auto md:w-1/2   md:h-96  bg-teal-600/35 backdrop-blur-lg  rounded-lg md:p-3 md:m-0.5 md:overflow-y-auto'>
                    {messages
                        .filter(m => m.role === 'assistant') // Only display messages from the assistant
                        .map(m => (
                        <div key={m.id} className='p-2 mb-2 font-medium text-white rounded'>
                            {m.content}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
} 