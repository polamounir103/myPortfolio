import React, { useEffect, useState } from "react";
import "../asstes/styles/Navbar.css";
import Logo from "../asstes/images/D.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [opnedNavMenuStyles, setOpnedNavMenuStyles] = useState("notActive");
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const handelNavMenue = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      if (isNavMenuOpen) {
        setIsNavMenuOpen(false);
        setOpnedNavMenuStyles("notActive");
      } else {
        setIsNavMenuOpen(true);
        setOpnedNavMenuStyles("active");
      }
    }
  };

  useEffect(() => {
    console.log("isNavMenuOpen    " + isNavMenuOpen + " " + opnedNavMenuStyles);
  }, [opnedNavMenuStyles]);
  // console.log(screenWidth)
  return (
    <div className="navbar fixed w-full z-50">
      <div className="navbarContainer text-white flex justify-between p-3">
        <div className="navbarLeft flex justify-center items-center gap-4">
          <img src={Logo} alt="Logo" className=" w-12 h-12 rounded-full" />
          <span className=" font-bold text-black"> Pola Mounir</span>
        </div>
        <div
          className="navMenuButton flex justify-center items-center w-10 h-10 font-medium bg-red-400 text md:hidden shadow-md rounded hover:bg-gray-900 "
          onClick={handelNavMenue}
        >
          {isNavMenuOpen ? <IoCloseOutline /> : <RiMenu4Fill />}
        </div>
        <div
          className={
            "navbarRight hidden sm:flex justify-center items-center md:justify-between flex-col md:flex-row absolute md:static  " +
            opnedNavMenuStyles
          }
        >
          <ul className="navItemList block md:flex flex-col md:flex-row m-auto w-full">
            <li className="font-medium text-black text-lg w-full md:w-fit px-10 md:p-2 h-14 md:h-12 flex items-center justify-end hover:bg-blue-200">
              <a href="#" onClick={handelNavMenue}>
                Home
              </a>
            </li>
            <li className="font-medium text-black text-lg w-full md:w-fit px-10 md:p-2 h-14 md:h-12 flex items-center justify-end hover:bg-blue-200">
              <a href="#aboutSection" onClick={handelNavMenue}>
                About
              </a>
            </li>
            <li className="font-medium text-black text-lg w-full md:w-fit px-10 md:p-2 h-14 md:h-12 flex items-center justify-end hover:bg-blue-200">
              <a href="#skillsSection" onClick={handelNavMenue}>
                {" "}
                Skills
              </a>
            </li>
            <li className="font-medium text-black text-lg w-full md:w-fit px-10 md:p-2 h-14 md:h-12 flex items-center justify-end hover:bg-blue-200">
              <a href="#projectsSection" onClick={handelNavMenue}>
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
