

import React from 'react';


const OverviewItem = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <img src={icon} alt={`${title} Icon`} className="mx-auto mb-4" />
      <p className="font-semibold">{title}</p>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};


const ProductBasics = ({data}) => {
  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className=" mb-8">
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          {data?.title} by {data?.developer}
        </h1>
        <p className="text-lg text-gray-600 mt-2">{data?.location}</p>
        <p className="text-md text-gray-500">{data?.description}</p>
        <p className="text-2xl font-bold mt-4">{data?.startingPrice}</p>
      </div>

      {/* Overview Section */}
      <div className="border-t border-gray-300 pt-8">
        <h2 className="text-2xl font-bold  my-6">{data?.title} Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {
            data?.overviewItems?.map(item => <OverviewItem key={item?.title} icon="https://img.icons8.com/ios-filled/50/000000/apartment.png"  {...item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default ProductBasics;
