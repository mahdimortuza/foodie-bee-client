import logo from "@/assets/logo.svg";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-full w-full max-w-[1300px] px-5 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 place-content-center gap-[30px] lg:gap-[120px]">
        {/* col-1  */}
        <div>
          <img src={logo} />
          <p className="text-gray font-inter mt-5 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            libero viverra dapibus odio sit malesuada in quis. Arcu tristique
            elementum viverra integer id.
          </p>
          <div className="flex gap-4 mt-11">
            <a href="/">
              <FacebookIcon className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>
            <a href="/">
              <Twitter className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>
            <a href="/">
              <LinkedinIcon className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>
            <a href="/">
              <InstagramIcon className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>{" "}
          </div>
        </div>

        {/* col-2  */}
        <div>
          <h3 className="text-2xl text-black font-bold">Opening Restaurant</h3>
          <p className="text-gray font-inter mt-11 text-base">
            Sat-Wet: 09:00am-10:00PM
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            {" "}
            Thursdayt: 09:00am-11:00PM{" "}
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            Friday: 09:00am-8:00PM
          </p>
        </div>

        {/* col-3  */}
        <ul className="flex flex-col">
          <h3 className="text-2xl text-black font-bold"> User Link</h3>
          <NavLink to="/" className="text-gray font-inter mt-11 text-base">
            About Us
          </NavLink>
          <NavLink to="/" className="text-gray font-inter mt-1 text-base">
            Contact Us
          </NavLink>
          <NavLink to="/" className="text-gray font-inter mt-1 text-base">
            Order Delivery
          </NavLink>
          <NavLink to="/" className="text-gray font-inter mt-1 text-base">
            Payment & Tex
          </NavLink>
          <NavLink to="/" className="text-gray font-inter mt-1 text-base">
            Terms of Services
          </NavLink>
        </ul>

        {/* col-4  */}
        <div>
          <h3 className="text-2xl text-black font-bold">Contact Us </h3>
          <p className="text-gray font-inter mt-11 text-base">
            1234 Country Club Ave
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            NC 123456, London, UK
          </p>
          <p className="text-gray font-inter mt-1 text-base">+0123 456 7891</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
