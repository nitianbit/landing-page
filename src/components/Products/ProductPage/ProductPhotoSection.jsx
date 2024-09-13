

import React from 'react';

const ProductPhotoSection = ({images=[],title=""}) => {
 

  return (
    <>
      <h2 className="text-3xl font-semibold mb-8">{title} Photos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Universal Square Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPhotoSection;
