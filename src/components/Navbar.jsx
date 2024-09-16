import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Icons from "../assets/home/icons.jpeg";
import Button from "./Button/Button"; // Make sure Button is properly defined

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <Navbar fluid rounded className='bg-white shadow-md'>
      <NavbarBrand>
        <img src={Icons} className="h-16 sm:h-20" alt="App Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <NavbarLink className='text-lg md:text-xl font-bold cursor-pointer' onClick={() => navigate("/")}>
            Home
          </NavbarLink>
          <NavbarLink className='text-lg md:text-xl font-bold cursor-pointer' onClick={() => navigate("/about-us")}>
            About Us
          </NavbarLink>
          <NavbarLink className='text-lg md:text-xl font-bold cursor-pointer' onClick={() => navigate("/products")}>
            For Buyers
          </NavbarLink>
          <NavbarLink className='text-lg md:text-xl font-bold cursor-pointer' onClick={() => navigate("/clients")}>
            For Builders/Dealers
          </NavbarLink>
          <Button className="mt-4 md:mt-0 px-4 py-2 text-lg md:text-xl font-bold" text="Contact Us" onClick={() => navigate("/contact-us")} />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComponent;
