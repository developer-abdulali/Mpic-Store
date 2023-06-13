import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Ratings() {
  return (
    <div className="flex items-center -ml-1">
        {Array.from({ length: 4 }).map((_, index)=>(
            <StarIcon key={index} className="w-6 h-6 flex flex-shrink-0 text-yellow-400" />
        ))}

    </div>
  )
}
