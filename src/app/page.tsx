import Image from 'next/image';
import Hero from '@/Views/Hero';
import { Button } from '@/components/ui/button';
import ProductList from '@/Views/ProductList';

export default function home() {
    return(
        <div>
       <Hero/>
       <Button/>
       <ProductList/>
        </div>
    )
}