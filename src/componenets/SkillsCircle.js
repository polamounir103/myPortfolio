import React from "react";
import Styles from "../asstes/styles/skillCircle.css";
import AboutImg from "../asstes/images/me2.ico";
import JsIcon from "../asstes/icons/js.png"
import HTMLIcon from "../asstes/icons/html-5.png"
import CssIcon from "../asstes/icons/css.png"
import ReactIcon from "../asstes/icons/react.png"
function SkillsCircle() {
  return (
    <div className="">
      <div className="circlePath bg-black relative">
      <img src={AboutImg} className="skill-main-image absolute top-0 left-0 h-full w-full" />
        <div className="rotatingCircle rotatingCircle1">
          <img className="circleImg" src={JsIcon} />
        </div>
        <div className="rotatingCircle rotatingCircle2">
          <img className="circleImg" src={HTMLIcon} />
        </div>
        <div className="rotatingCircle rotatingCircle3">
          <img className="circleImg" src={ReactIcon} />
        </div>
        <div className="rotatingCircle rotatingCircle4">
          <img className="circleImg" src={CssIcon} />
        </div>

      </div>
    </div>
  );
}

export default SkillsCircle;
