import React from "react";
import MainImage from "../asstes/images/me2.ico";
import Styles from "../asstes/styles/main.css";
import SideMenu from "./SideMenu";

function Main() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 main-section">
    <SideMenu />
      <div className="h-5/6 w-full">
        <div className="h-full flex flex-col-reverse md:flex-row justify-around items-center">
         
          <div className=" mainRightSide md:h-full w-full flex justify-center flex-col items-center gap-5 ">
            <h2 className=" font-bold text-2xl p-3">
              HEY, I'M POLA MOUNIR SAMIR
            </h2>
            <p className="text-center w-2/3 text-lg">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            <button className="text-white uppercase space-x-1 font-bold rounded-xl px-10 py-3 bg-yellow-500 ">Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
