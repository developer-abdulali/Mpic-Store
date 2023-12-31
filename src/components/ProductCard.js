import Link from "next/link";
import Image from "next/image";
import Ratings from "src/components/Ratings";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { toast } from "react-hot-toast";


export default function ProductCard({ product, index }) {
  const { addItem } = useShoppingCart()

  function onAddToCart(event){
    const id = toast.loading("Adding 1 item...")
    addItem(product)
    toast.success(`${product.name} added`, {id})
  }
  return (
    <Link 
      href={`/products/${product.id}`}
      className="border-2 rounded-md group overflow-hidden"
    >
      <div className="relative w-full h-64">
        {product.image && <Image priority={index === 1} src={product.image} alt={product.name} fill sizes="100%" />} 
      </div>
 
      <div className="p-6 bg-white">
        <p className="font-semibold text-lg">{product.name}</p>
        <Ratings />
        <div className="mt-4 flex items-center justify-between space-x-2">
            <div>
                <p className="text-gray-500">Price</p>
                <p className="text-lg font-semibold">{formatCurrencyString({
                  currency: product.currency,
                  value: product.price
                })}</p>
            </div>
            <button onClick={onAddToCart} className="border rounded-lg py-1 px-4 mt-4border-lime-500  bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white">
                Add to Cart
            </button>
        </div>
      </div>
    </Link>
  );
}
