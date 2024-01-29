import React from "react";
import SkillsCircle from "./SkillsCircle";
import SkillItem from "./SkillItem";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col justify-around items-center gap-4" id="aboutSection">
      <div className="w-full h-full bg-gray-100  flex flex-col lg:flex-row justify-between items-center pt-20 gap-10">
        <div className="w-full flex flex-col gap-10 p-12 md:ps-32">
          <div className="w-full h-full flex flex-col items-center md:items-start gap-6">
            <h2 className="font-extrabold text-3xl">About</h2>
            <div>
              <h2 className="text-red-500 capitalize">
                I am Studing Computer Science
              </h2>
              <h2 className="text-red-500 capitalize">Iam Pola Mounir Samir</h2>
              <div className="navContactContainer flex flex-col md:flex-row m-auto">
              <ul className="navSocialList flex items-center m-auto gap-3 my-3">
                <li className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-black hover:text-white" style={{transition:".3s"}}>
                  <FaFacebookF />
                </li>
                <li className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-black hover:text-white" style={{transition:".3s"}}>
                  <FaLinkedinIn />
                </li>
                <li className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-black hover:text-white" style={{transition:".3s"}}>
                  <FaGithub />
                </li>
              </ul>
              <button className="navContactButton rounded-lg text-lg py-2 bg-yellow-500 w-40 h-12 flex items-center justify-center ms-2">
                Lets Contact 
              </button>
            </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center md:items-start gap-6 pt-20" id="skillsSection">
            <h2 className="font-extrabold text-3xl"> My Skills</h2>
            <div className="h-full flex justify-center md:justify-start gap-5 flex-wrap">
              <SkillItem name="HTML" />
              <SkillItem name="CSS" />
              <SkillItem name="Bootstrap" />
              <SkillItem name="Tailwind CSS" />
              <SkillItem name="Java Script" />
              <SkillItem name="React" />
            </div>
          </div>
        </div>

        <div className="w-full h-96  flex justify-center items-center relative overflow-hidden mb-16">
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <SkillsCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
