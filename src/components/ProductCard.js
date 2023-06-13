// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// export default function ProductCard({ product }) {
//   return (
//     <Link 
//       href={`/products/${product.id}`}
//       className="border-2 rounded-md group overflow-hidden"
//     >
//       <div className="relative w-full h-64">
//         {product.image && <Image src={product.image} alt={product.name} fill />}
//       </div>
//     </Link>
//   );
// }




// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// export default function ProductCard({ product }) {
//   return (
//     <Link
//       href={`/products/${product.id}`}
//       className="border-2 rounded-md group overflow-hidden"
//     >
//       <div key={product.id} className="relative w-full h-64">
//         {product.image && <Image src={product.image} alt={product.name} fill />}
//       </div>
//     </Link>
//   );
// }


import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className='border-2 rounded-md group overflow-hidden'>
      <div className='relative w-full h-64'>
        {product.image && (
          <Image src={product.image} alt={product.name} fill />
        )}
      </div>
    </Link>
  );
}
