import React, { useState, useEffect } from "react";
import ShowMenu from "../Components/ShowMenu";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";

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
      <div className="w-screen h-12 bg-gradient-to-tr from-black to-pink-600">
        <div className="float-left flex flex-col w-40 mx-3">
          <div className="font-semibold tracking-tight leading-none font-serif text-white mr-5 mt-4 flex mb-0 pb-0  flex-row">
            <div>
              <img
                onClick={() => setState(!state)}
                className=" cursor-pointer pt-1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNXvRIuRSR1anM3AOe_EnHoq520h6uV1qDw&usqp=CAU"
                width="15"
              />
            </div>

            <div className="mx-2 ">
              <a>menu</a>
            </div>
          </div>

          {state ? <ShowMenu /> : null}
        </div>
        <div className="float-right font-semibold font-serif text-white mr-5 mt-4 mb-6 flex flex-row ">
          <div className="pt-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrHlsZ0BO6iQUOQRxGqreTYCWLVAxmQyaTw&usqp=CAU"
              width="15"
            />
          </div>
          <div className="mx-1 cursor-pointer">
            <a onClick={() => navigate("/")}> home</a>
          </div>
        </div>
      </div>
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
                      className="border border-slate-900 rounded-sm w-24 mt-1  bg-gradient-to-tr from-black to-pink-600 relative text-white border  rounded content-center ease-out hover:translate-x-1 transition-all font-semibold font-serif h-7">{text}</button>
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
