import React, { useState, useEffect } from "react";
import ShowMenu from "../Components/ShowMenu";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import Navbar from "../Components/Navbar";

function S_details() { 
  const [state, setState] = useState(false);
  //const [cList, setcList] = useState([]);
  const [id, setId] = useState("");

  //useEffect(() => {
  //Axios.get("http://localhost:3001/ccgpa/ifUserEligible", {
  //id: id,
  //}).then((response) => {
  //setcList(response.data);
  //});
  //}, []);

  let cList = [
    {
      cName: "Google",
    },
    {
      cName: "Deloitte",
    },
  ];
  const [text,setText] = useState("Apply");
  const changeText = (text) => setText(text);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <div className="body">
        <div className="content w-screen h-screen fixed">
          <div className="  border-slate-300 mb-1 mt-1 mr-1 flex justify-center items-center flex-col ">
            <div className=" font-bold flex justify-center items-center pt-5 text-3xl tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 mr-5 mt-4  flex-row">
              <h1>WELCOME TO PLACEMENT DETAILS PAGE!</h1>
            </div>
            <div className="font-semibold flex justify-center items-center pt-10 font-serif text-cyan-800">
              List of Companies that you are eligible to
              apply are as follows:
            </div>
            
            <div className="font-bold pt-3 tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 flex flex-col ">
              {cList.map((val) => {
                return (
                  <div className="flex justify-center flex-row pt-2">
                    <div className=" pt-3 pb-3 ">
                      <h1>* {val.cName} </h1>
                    </div>
                    <div className="mx-3">
                      <button
                      onClick={()=>changeText("Applied")}
                      className="border border-slate-900  w-24 mt-1  bg-gradient-to-tr from-black to-pink-600 relative text-white  rounded content-center ease-out hover:translate-x-1 transition-all font-semibold font-serif h-7">{text}</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default S_details;
