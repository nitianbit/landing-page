import React from 'react';

const Amenities = ({ amenities, title = "" }) => {


  return (
    <div className='pt-6'>
      <h2 className="text-3xl font-semibold   mb-8">Why Buy in {title}?</h2>
      <h3 className="text-2xl font-medium  mb-6">AMENITIES</h3>

      {amenities?.type == "string" ?
        amenities?.data :
        amenities?.type == "html" ? 
        <div dangerouslySetInnerHTML={{ __html: amenities?.data }} /> :
          amenities?.type == "list" ?
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {amenities?.data?.map((amenity, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <p className="mt-2 font-medium">{amenity?.name}</p>
                </div>
              ))}
            </div> : null}
    </div>
  );
};

export default Amenities;
