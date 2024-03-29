import React from "react";
import logo from "../asstes/images/D.jpg";
function Footer() {
  return (
    <div>
      <footer className="flex h-fit justify-around items-center p-16 bg-black text-yellow-400">
        <img src={logo} className="h-16 w-16 rounded-full" />
        <div className="flex flex-col">
          <h2 className=" ">JOhn MOunir</h2>
          <h3>Frontend Developer</h3>
        </div>
        <div>
          <ul className=" text-red-500">
            <li>
              <span>Facebook</span> <a href="#">00</a>
            </li>
            <li>
              <span>Facebook</span> <a href="#">00</a>
            </li>
            <li>
              <span>Facebook</span> <a href="#">00</a>
            </li>
            <li>
              <span>Facebook</span> <a href="#">00</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
