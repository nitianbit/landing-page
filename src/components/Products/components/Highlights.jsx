import React from 'react';

// const highlights = [
//   "Welcome Court",
//   "The Front Square",
//   "The Central Square",
//   "The Rear Square",
//   "The Northern Square ( Walk | Drive | Park )",
//   "The Southend Square ( Walk | Drive | Park )",
//   "The Westend Square ( Walk | Drive | Park )",
//   "The Basement Is The Very Base Of Business",
//   "The Universal Link",
//   "Building Height Multi-level Store Height",
//   "Ample surface car parking",
//   "Wider service alleys",
//   "Facilitate by wide range plazas",
//   "Distinctly designed space for pedestrian and vehicular movement"
// ];

const Highlights = ({highlights}) => {
  return (
    <div className="flex flex-col items-start px-4 py-8 md:px-12 lg:px-24 border-b">
      <h2 className="text-3xl font-semibold mb-6">Highlights</h2>
      <ul className="list-disc list-inside space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-gray-700">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
