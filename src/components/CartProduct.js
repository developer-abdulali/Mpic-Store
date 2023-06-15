import Link from "next/link";
import Image from "next/image";
import { MinusSmallIcon } from "@heroicons/react/24/solid";
import { PlusSmallIcon } from "@heroicons/react/24/solid";


export default function CartProduct({ product }) {
  return (
    <div className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 bg-white">
      <Link
        href={`/products/${product.id}`}
        className="flex items-center space-x-4 "
      >
        <div className="relative w-20 h-20 hover:scale-110 transition-transform">
          <Image
            src={product.image}
            all={product.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <button
            disabled={product.quantity <= 1}
            className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
          >
            <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
          <p className="font-semibold text-xl">{product.quantity}</p>
          <button className="p-1 rounded-md hover:bg-green-100 hover:text-green-500">
            <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
