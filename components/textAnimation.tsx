"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TextAnimation() {
  return (
    <div className="rounded-lg ">
        <TypeAnimation
        className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500"
        
        sequence={[
        
        'ChatGPT', 
        3000, 
        'Turnit', 
        3000, 
        'GPTZero',
        5000,
        'Gemini',
        5000,
        () => {
            console.log('Sequence completed');
        },
        ]}
        repeat={Infinity}
        speed={2}
        deletionSpeed={20}
        />
    </div> 
  )
}

export default TextAnimation