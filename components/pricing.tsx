import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

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
            <Card className='bg-green-500'>
                <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>£19.99</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>20k words limit</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Pro </CardTitle>
                    <CardDescription>£49.99</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>50k words limit</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    </div>
    </>
  )
}

