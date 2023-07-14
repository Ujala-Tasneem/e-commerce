import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export type Product = {
    id: number,
    name:string,
    price: number,
    category: string,
    image: StaticImageData

};