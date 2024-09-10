
import React from 'react';

const Item = ({ time, description }) => (
  <div className="flex items-center space-x-4 mb-4">
    <div className="w-16 h-16 rounded-full bg-purple-800 flex items-center justify-center flex-shrink-0">
      <span className="text-white text-xl font-bold">{time}</span>
    </div>
    <p className="text-sm leading-tight max-w-[200px]">{description}</p>
  </div>
);

const LocationAdvantages = () => {
  const driveTimeData = [
    { time: "00", description: "MINUTES ADJACENT TO THE INSTITUTIONAL BELT" },
    { time: "05", description: "MINUTES DRIVE TO THE NEAREST METRO STATION" },
    { time: "10", description: "MINUTES DRIVE TO FORTIS ESCORT HOSPITAL" },
    { time: "15", description: "MINUTES DRIVE TO GREATER NOIDA" },
    { time: "15", description: "MINUTES DRIVE TO BADARPUR FLY OVER" },
    { time: "20", description: "MINUTES DRIVE TO SOUTH DELHI" },
    { time: "35", description: "MINUTES DRIVE TO GURGAON" },
    { time: "35", description: "MINUTES DRIVE TO AIRPORT" },
  ];

  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {driveTimeData.map((item, index) => (
          <Item key={index} time={item.time} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default LocationAdvantages;