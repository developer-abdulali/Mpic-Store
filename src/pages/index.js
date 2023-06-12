import { Inter } from 'next/font/google'
import { stripe } from 'src/utils/stripe'
const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  // console.log(products)
  return (
    <div className=''>home</div>
  )
}

export async function getStaticProps(){

  const inventory = await stripe.products.list({
    limit: 8,
  })
  return{
    props:{
      products: inventory
    }
  }
}