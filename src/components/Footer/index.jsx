


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="container mx-auto">

//          <div className="flex justify-between items-start">

//            <div className="flex flex-col">
//              <h1 className="text-3xl font-bold">APKI PROPERTY</h1>
//           </div>

//           {/* Navigation */}
//           <div className="flex flex-col space-y-2">
//             <Link to="/about-us" className="hover:underline">ABOUT US</Link>
//             <Link to="/products" className="hover:underline">FOR BUYERS</Link>
//             <Link to="/clients" className="hover:underline">FOR BUILDERS/DEALERS</Link>
//             <Link to="/privacy-policy" className="hover:underline">PRIVACY POLICY</Link>
//             <Link to="/contact-us" className="hover:underline">CONTACT US</Link>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="hover:underline"> 
//               <img src="path_to_facebook_icon" alt="Facebook" />
//             </a>
//             <a href="#" className="hover:underline"> 
//               <img src="path_to_instagram_icon" alt="Instagram" />
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="border-gray-600 my-8" />

//         {/* Middle section with cities and services */}
//         <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
//           {/* Top Cities */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">TOP CITIES</h2>
//             <ul className="grid grid-cols-2 gap-2">
//               <li>DELHI</li>
//               <li>MUMBAI</li>
//               <li>GURGAON</li>
//               <li>PUNE</li>
//               <li>FARIDABAD</li>
//               <li>BENGALURU</li>
//               <li>NOIDA</li>
//               <li>CHENNAI</li>
//               <li>HYDERABAD</li>
//               <li>KOLKATA</li>
//             </ul>
//           </div>

//           {/* What We Offer */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">WHAT WE OFFER</h2>
//             <ul className="grid grid-cols-2 gap-2">
//               <li>RESIDENTIAL APARTMENTS</li>
//               <li>RESIDENTIAL PLOTS</li>
//               <li>RESIDENTIAL FLATS</li>
//               <li>COMMERCIAL OFFICES</li>
//               <li>RESIDENTIAL BUILDER FLOORS</li>
//               <li>COMMERCIAL SHOPS</li>
//               <li>RESIDENTIAL DUPLEX</li>
//               <li>RESIDENTIAL VILLAS</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="border-gray-600 my-8" />

//         {/* Bottom copyright */}
//         <div className="text-center">
//           <p className="text-sm">&copy; Copyright @apkiproperty.com. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-3xl font-bold">APKI PROPERTY</h1>
                    </div>

                     <div className="flex flex-col space-y-2">
                        <Link to="/about-us" className="hover:underline">ABOUT US</Link>
                        <Link to="/products" className="hover:underline">FOR BUYERS</Link>
                        <Link to="/clients" className="hover:underline">FOR BUILDERS/DEALERS</Link>
                        <Link to="/privacy-policy" className="hover:underline">PRIVACY POLICY</Link>
                        <Link to="/contact-us" className="hover:underline">CONTACT US</Link>
                    </div>

                     <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:underline">
                            <img src="path_to_facebook_icon" alt="Facebook" />
                        </a>
                        <a href="#" className="hover:underline">
                            <img src="path_to_instagram_icon" alt="Instagram" />
                        </a>
                    </div>
                </div>


                 <hr className="border-gray-600 my-8" />

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <h2 className="text-xl font-bold mb-4 text-center md:text-left">TOP CITIES</h2>
                        <ul className="grid grid-cols-2 gap-2 text-center md:text-left">
                            <li>DELHI</li>
                            <li>MUMBAI</li>
                            <li>GURGAON</li>
                            <li>PUNE</li>
                            <li>FARIDABAD</li>
                            <li>BENGALURU</li>
                            <li>NOIDA</li>
                            <li>CHENNAI</li>
                            <li>HYDERABAD</li>
                            <li>KOLKATA</li>
                        </ul>
                    </div>

                     <div>
                        <h2 className="text-xl font-bold mb-4 text-center md:text-left">WHAT WE OFFER</h2>
                        <ul className="grid grid-cols-2 gap-2 text-center md:text-left">
                            <li>RESIDENTIAL APARTMENTS</li>
                            <li>RESIDENTIAL PLOTS</li>
                            <li>RESIDENTIAL FLATS</li>
                            <li>COMMERCIAL OFFICES</li>
                            <li>RESIDENTIAL BUILDER FLOORS</li>
                            <li>COMMERCIAL SHOPS</li>
                            <li>RESIDENTIAL DUPLEX</li>
                            <li>RESIDENTIAL VILLAS</li>
                        </ul>
                    </div>
                </div>

                 <hr className="border-gray-600 my-8" />

                 <div className="text-center">
                    <p className="text-sm">&copy; Copyright @apkiproperty.com. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
