import React from "react";
import { FaFacebookF , FaTwitter , FaInstagram , FaGithub , FaLinkedinIn } from "react-icons/fa";

function SideMenu() {
  return (
    <div className=" absolute bg-black top-full md:top-1/2 left-0 -translate-y-full md:-translate-y-1/2 p-3 md:p-5 rounded">
      <ul className="flex flex-col gap-5 text-2xl text-white">
        <li>
          <a href="#" target="_blank"> <FaFacebookF /></a>
        </li>
        <li>
          <a href="#" target="_blank"> <FaTwitter /></a>
        </li>
        <li>
          <a href="#" target="_blank"> <FaInstagram /></a>
        </li>
        <li>
          <a href="#" target="_blank"> <FaGithub /></a>
          </li>
        <li>
          <a href="#" target="_blank"> <FaLinkedinIn  /></a>
          </li>
          </ul>
    </div>
  );
}

export default SideMenu;
