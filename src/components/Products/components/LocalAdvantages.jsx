
import React from 'react';

const Item = ({ time, description }) => (
  <div className="flex items-center space-x-4 mb-4">
    <div className="w-16 h-16 rounded-full bg-purple-800 flex items-center justify-center flex-shrink-0">
      <span className="text-white text-xl font-bold">{time}</span>
    </div>
    <p className="text-sm leading-tight max-w-[200px]">{description}</p>
  </div>
);

const LocationAdvantages = ({ locationData }) => {


  return (
    <>
      <h3 className="text-2xl font-bold  mb-6">LOCATION ADVANTAGES</h3>
      {locationData?.type == "string" ?
        locationData?.data :
        locationData?.type == "html" ?
          <div dangerouslySetInnerHTML={{ __html: locationData?.data }} /> :
          locationData?.type == "list" ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {locationData?.data?.map((item, index) => (
                <Item key={index} time={item.time} description={item.description} />
              )
              )}
            </div> : null}
    </>
  );
};

export default LocationAdvantages;
