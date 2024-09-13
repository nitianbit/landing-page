import React from 'react'
import { Card } from 'flowbite-react'

const ProductCard = ({heading1, heading2, heading3, heading4, src, onClick}) => {
  return (
    <Card
    className="max-w-sm shadow-none border-none p-0 cursor-pointer"
    onClick={onClick}
    style={{
        paddingLeft: "0px"
    }}
    imgSrc={src}
>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-start">
        {heading1}
    </h5>
    <p className="font-sm text-gray-700 dark:text-gray-400 text-start">
        {heading2}
    </p>
    <p className="font-sm text-gray-700 dark:text-gray-400 text-start">
        {heading3}
    </p>
    <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-start">
        {heading4}
    </h3>
</Card>
  )
}

export default ProductCard
