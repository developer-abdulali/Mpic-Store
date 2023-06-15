import Link from "next/link"
import { useShoppingCart } from "use-shopping-cart"

export default function cart() {
    const {cartCount, clearCart } = useShoppingCart()
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
    {cartCount > 0 ? (
        <>
          <h2 className="text-4xl font-semibold">
            Your shopping cart
        </h2>
        <p className="mt-1 text-xl">
          {cartCount} items {" "}
        <button onClick={() => clearCart()} className="opacity-50 hover:opacity-100 text-base capitalize">(Clear all)</button>
        </p>
        </>
    ): (
        <>
        <h2 className="text-4xl font-semibold">
            Your shopping cart is empty.
        </h2>
        <p className="mt-1 text-xl">
            Check out our awesome products
            <Link href="/" className="text-red-500 underline"> here!</Link>
        </p>
        </>
    )}

    </div>
  )
}
