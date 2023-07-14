import Link from 'next/link';
import logo from '/public/logo.webp';
import Image from 'next/image';

import {ShoppingCart} from "lucide-react"

const Header = () => {
  return (
    <div className='flex justify-between items-center py-8 px-20' >
      <Image src={logo} alt="logo" className='w-35' />
      <ul className='flex gap-x-10'>
        <li className='text-lg' >
          <Link href={"/"}>
            Female
          </Link>
        </li>
        <li className='text-lg'>
          <Link href={"/"}>
            Male
          </Link>
        </li>
        <li className='text-lg'>
          <Link href={"/"}>
            Kids
          </Link>
        </li>
        <li className='Text-lg'>
          <Link href={"/"}>
            All Products
          </Link>
        </li>
      </ul>
   <input type="text"/>
      <div className='h-10 w-10 rounded-full bg-gray-400 flex justify-center items-center'>
        <Link href="/"><ShoppingCart/></Link>
      </div>
    </div>

  )
}

export default Header