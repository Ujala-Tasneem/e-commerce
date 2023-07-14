import React from 'react'
import feature from "/public/feature.webp"
import Image, {StaticImageData} from 'next/image'
import product from "/public/product.webp"
import event3 from "/public/event3.webp"

function ProductCart(props:{tittle:string, price:number, img: StaticImageData, category:string}) {
  return (
    <div>
    <Image src={props.img} alt='product'/>
    <h3 className='font-bold text-lg mt-3'> {props.tittle} </h3>
    <p className='font-bold text-lg'>${props.price}</p>
</div>
  )
}

export default ProductCart