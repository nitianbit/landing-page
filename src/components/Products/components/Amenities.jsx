import React from 'react';

const Amenities = () => {
  const amenities = [
    { name: "Restaurants", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Food Court", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Multiplex", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Shopping Area", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Hypermarket", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Anchor Store", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Banquet", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Pubs & Discos", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Gaming Zone", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Office Spaces", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Retail", image: "https://www.w3schools.com/html/images/13_html_images.png" },
    { name: "Open Air Food Court", image: "https://www.w3schools.com/html/images/13_html_images.png" },
  ];

  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      <h2 className="text-3xl font-semibold   mb-8">Why Buy in Universal Square?</h2>
      <h3 className="text-2xl font-medium  mb-6">AMENITIES</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="text-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={amenity.image}
                alt={amenity.name}
                className="w-full h-32 object-cover"
              />
            </div>
            <p className="mt-2 font-medium">{amenity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
