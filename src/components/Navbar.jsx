import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  const navigate = useNavigate()

  const scrollToElement = () => {
    const element = document.getElementById('contact-form');
    window.scrollBy({ top: element.offsetTop, behavior: 'smooth' });
  };

  return (
    <Navbar fluid rounded className='ml-10 mr-10'>
      <NavbarBrand href="">
        <img src="https://i.ibb.co/3c47Ccs/Screenshot-2024-06-25-at-9-34-14-AM.png" className="mr-3 h-16 sm:h-20" alt="Flowbite React Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className='text-xl font-bold' href="#">
          Home
        </NavbarLink>
        <NavbarLink className='text-xl font-bold' onClick={()=>{
          navigate("/about-us")
        }}>
          About Us
        </NavbarLink>
        <NavbarLink className='text-xl font-bold' href="#">For Buyers</NavbarLink>
        <NavbarLink className='text-xl font-bold' href="#">For Builders/Dealers</NavbarLink>
        <NavbarLink className='text-xl font-bold'>
          <Button className="px-4 font-rasputin" text="Schedule a Call" onClick={scrollToElement}/>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavbarComponent
