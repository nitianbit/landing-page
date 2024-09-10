// import React from 'react'

// const ProductBasics = ({data}) => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default ProductBasics


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


const ProductBasics = () => {
  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className=" mb-8">
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          Universal Square by Auric Group
        </h1>
        <p className="text-lg text-gray-600 mt-2">Sector 79, Faridabad</p>
        <p className="text-md text-gray-500">Independent SCO Floors and Commercial SCO Plots</p>
        <p className="text-2xl font-bold mt-4">Starting ₹49 Lakh*</p>
      </div>

      {/* Overview Section */}
      <div className="border-t border-gray-300 pt-8">
        <h2 className="text-2xl font-bold  my-6">Universal Square Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <OverviewItem
            icon="https://img.icons8.com/ios-filled/50/000000/house.png"
            title="Project Size"
            description="13.87 Acres"
          />
          <OverviewItem
            icon="https://img.icons8.com/ios-filled/50/000000/apartment.png"
            title="Total Units"
            description="227"
          />
          <OverviewItem
            icon="https://img.icons8.com/ios-filled/50/000000/legal.png"
            title="Legal Approval"
            description="DTCP & HRERA"
          />
          <OverviewItem
            icon="https://img.icons8.com/ios-filled/50/000000/rera.png"
            title="RERA ID"
            description="HRERA-PKL-FBD-440-2023"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductBasics;
