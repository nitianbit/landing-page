import React from 'react'

const ProductPhotoSection = () => {
    return (
        <div className="border-t border-b p-6">
            <div className='text-3xl flex justify-center font-bold pb-8'>More Photos</div>
            <div class="grid gap-4 grid-flow-col overflow-x-auto horizontal-scroll">
                <img src="image1.jpg" class="h-48 w-64 object-cover" alt="Image 1" />
                <img src="image2.jpg" class="h-48 w-64 object-cover" alt="Image 2" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
                <img src="image3.jpg" class="h-48 w-64 object-cover" alt="Image 3" />
            </div>
        </div>
    )
}

export default ProductPhotoSection
