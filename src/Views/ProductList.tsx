import React from 'react'
import feature from "/public/feature.webp" 
import Image,{StaticImageData} from 'next/image'
import ProductCart from '@/components/ProductCart'
import product from "/public/product.webp"
import event3 from "/public/event3.webp"
import { Button } from '@/components/ui/button'
import { Products } from '@/app/utils/mockup'


const ProductList = () => {
  const productChencks = Products.slice(0,3)
  return (
    
    <div className='flex justify-between mt-16'>
      {
        productChencks.map((product) =>
          <ProductCart key={product.id} 
          tittle={product.name} price= {product.price} img = {product.image} category={product.category}/>
        )
      }
    {/* <ProductCart tittle="DesignerShrit" price= {200} img = {feature}/> */}
    {/* <Button className= 'flex-col-reverse bg-black h-14 px-10 text-white mt-3'>Start Shopping</Button> */}
    {/* <ProductCart tittle="SweatShirt" price= {100} img = {product}/> */}
    {/* <ProductCart tittle="Flex Push Button Bomber" price= {170} img = {event3}/> */}
    </div>
    
  )
}

export default ProductList