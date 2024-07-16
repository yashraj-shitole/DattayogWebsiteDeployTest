import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger-menu.svg";
import DropDown from "./DropDown";
import { FaArrowRightLong } from "react-icons/fa6";


const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/"
        >
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/about"
        >
          About Us
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/certificates"
        >
          Certificates
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/blogs"
        >
          Blogs
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/contact"
        >
          Contact Us
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/products"
        >
          Products Range
        </Link>
      ),
    },
  ];

  return (
    <div className="bg-white/70 h-fit backdrop-blur-xl flex px-10 md:px-10 py-5 items-center justify-between relative">
      <div className="h-[40px] md:h-[70px] flex items-center  object-cover">
        <Link to="/">
          <img
            className="object-cover w-[70px]  md:w-[90px] h-auto md:h-auto"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      <div className="hidden absolute top-6 right-1/2 translate-x-1/2 lg:flex">
        <ul className="flex h-[60px] items-center gap-5 text-xl font-semibold  text-[#383838]">
          <li className="h-[60px] flex items-center transition-all delay-100 ease-in-out  hover:text-primary ">
            <Link to="/">Home</Link>
          </li>
          <li className="h-[60px] flex items-center transition-all delay-100 ease-in-out hover:text-primary">
            <Link to="/about">About Us</Link>
          </li>

          <li className="h-[60px] flex items-center transition-all delay-100 ease-in-out hover:text-primary">
            <DropDown className="h-[60px]" />
          </li>

          <li className="h-[60px] flex items-center transition-all delay-100 ease-in-out hover:text-primary">
            <Link to="/certificates">Certificates</Link>
          </li>

          <li className="h-[60px] flex items-center transition-all delay-100 ease-in-out hover:text-primary">
            <Link to="/blogs">Blogs</Link>
          </li>

          
        </ul>

      
      </div>

      <div className="w-[200px] flex items-center justify-start h-full">
      <Link className="text-xl font-bold"  to="/contact">
      <div className="hidden w-fit transition-all delay-200  lg:flex h-full items-center justify-start gap-3 hover:gap-6 text-white bg-primary px-5 py-2 rounded-full">
                  Contact Us
                  <FaArrowRightLong className="fill-white animate-pulse" />

              </div>
              </Link>
      </div>
       

      <div className="flex lg:hidden  top-10 right-10">
        <Dropdown
          className=" cursor-pointer"
          menu={{
            items,
          }}
          placement="bottomRight"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img className="h-[40px]" src={hamburger} alt="" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
