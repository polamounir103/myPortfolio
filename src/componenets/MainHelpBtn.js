import React, { useEffect, useState } from "react";
import { SiHelpscout } from "react-icons/si";
import { LuMessageSquarePlus } from "react-icons/lu";
import { MdDarkMode , MdLightMode  } from "react-icons/md";

function MainHelpBtn() {
const [mainHelpItem , setMainHelpItem] = useState("hidden") 
const [isMainHelp , setIsMainHelp] = useState(false)

useEffect (()=> {
    if (isMainHelp){  
        setMainHelpItem(" flex")
    }else{
        setMainHelpItem(" hidden")
    }
} , [isMainHelp])

const handelMainHelp = () => {
    if (isMainHelp){
         setIsMainHelp(false)
    }else{
        setIsMainHelp(true)
    }
};
const closeMainHelp = () => {
    setIsMainHelp(false)
};
const testing = () => {
   console.log("Testing")
};


  return (
    <div className="mainHelpBtn fixed bottom-10 right-10 w-14 z-10 rounded-full flex flex-col-reverse items-center justify-start gap-3" onClick={handelMainHelp} >
      <div id="mainHelpBtn" className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center text-start"  onBlur={closeMainHelp}>
        <SiHelpscout />
      </div>
        <div className={"main-help-item w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full items-center justify-center text-start " + mainHelpItem} onClick={testing}>
        <LuMessageSquarePlus />
        </div>
        <div className={"main-help-item w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full items-center justify-center text-start " + mainHelpItem} onClick={testing}>
        <MdDarkMode />
        </div>
    </div>
  );
}

export default MainHelpBtn;
