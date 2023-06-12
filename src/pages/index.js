 import React from 'react'
import { stripe } from 'src/utils/stripe'
 
 export default function index({products}) {
  console.log(products)

   return (
     <div>home</div>
   )
 }
 
export async function getStaticProps(){
  const inventory = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  })
  const products = inventory.data.map(product => {
    const price = product.default_price
    return{
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0]
    }
  })
  return{
    props:{
      products,
    }
  }
}