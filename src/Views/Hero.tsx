import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import header from "/public/header.webp"
import Image from 'next/image'
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"



const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 '>
        {/* Left div/content div */}
        <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-t-lg bg-blue-300 text-blue-500 hover:bg-blue-200 '>Badge</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-8">
        An Industrial Take on Streetwear
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
    <Button className='bg-black h-14 px-10 text-white mt-3'>Start Shopping</Button>

    <div className='flex justify-between items-center py-12 px-20' >
    <Image src={Featured1} alt="logo" className='w-35' />
    <Image src={Featured2} alt="logo" className='w-35' />
    <Image src={Featured3} alt="logo" className='w-35' />
    <Image src={Featured4} alt="logo" className='w-35' />
      </div>

        </div>
        {/* right div/image div */}
        <div className='flex-1'>
            <Image src={header} alt='hero'/>
        </div>
    </section>
  )
}

export default Hero