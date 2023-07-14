import { Princess_Sofia } from "next/font/google"
import { Product } from "./types"
import product from "/public/product.webp"
import event3 from "/public/event3.webp"
import feature from "/public/feature.webp"

export const Products: Product[] = [{
    id: 1,
    name: "Product 1",
    price: 100,
    category: "female",
    image: product
},
    {
    id: 2,
    name: "Product 2",
    price: 175,
    category: "female",
    image: feature
},
        {
    id: 3,
    name: "Product 3",
    price: 125,
    category: "male",
    image: event3
},
            {
    id: 4,
    name: "Product 4",
    price: 200,
    category: "all products",
    image: product
}
]