import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import Navbar from "../Components/Navbar";

function S_details() {

  const [cList, setcList] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
  Axios.get("http://localhost:3001/ccgpa/ifUserEligible", {
  id: id,
  }).then((response) => {
  setcList(response.data);
  });
  }, []);



  
 /* let cList = [
    {
      cName: "Google",
    },
    {
      cName: "Deloitte",
    },
    {
      cName: "Deloe",
    },
    {
      cName: "Deloitte",
    },
    {
      cName: "Deloie",
    },
  ];*/
  const [text, setText] = useState("Apply");
  const changeText = (text) => setText(text);
  return (
    <div>
      <nav className=" top-0 ">
        <Navbar />
      </nav>
      <div className="body ">
        <div className="content relative ">
          <div className="flex justify-center items-center flex-col bg-gradient-to-tr from-white to-blue-200">
            <div className="bg-[url('https://www.svc.ac.in/SVC_MAIN/PlacementCell/p4.jpg')] w-screen h-64 mt-0"></div>
            <div className=" font-bold flex justify-center items-center pt-5 text-3xl tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-900 mr-5 mt-4  flex-row">
              <h1>WELCOME TO PLACEMENT DETAILS PAGE!</h1>
            </div>
            <div className="flex flex-row">
              <div className="body1 ml-4 p-2 float-left mt-9 mr-20 w-1/4 h-3/4 border rounded-lg shadow-2xl shadow-slate-500 mb-3 bg-gradient-to-tr from-blue-500 to-black text-white">
                <div className=" p-4 font-sans font-semibold text-base ">
                  We, Think Ahead ACCA ( Automated Campus to Career Assistant )
                  are here to build your Skills and Career with our Driven
                  Passion and Reality.
                </div>
              </div>
              <div className="body2">
                <div className="font-semibold flex justify-center items-center pt-10 font-serif text-cyan-800">
                  List of Companies that you are eligible to apply are as
                  follows:
                </div>

                <div className="font-bold pt-3 tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-800 flex flex-col mb-8 ">
                  {cList.map((val) => {
                    return (
                      <div className="flex justify-center flex-row pt-2 content-start">
                        <div className=" pt-3 pb-3 ">
                          <h1>* {val.cName} </h1>
                        </div>
                        <div className="mx-3">
                          <button
                            onClick={() => changeText("Applied")}
                            className="border border-slate-900  w-24 mt-1  bg-gradient-to-tr from-black to-blue-600 relative text-white  rounded content-center ease-out hover:translate-x-1 transition-all font-semibold font-serif h-7"
                          >
                            {text}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" footer fixed bottom-0 w-screen h-9 flex justify-center items-center bg-gradient-to-tr from-black to-blue-700 text-white">
        <div className="font-semibold">Let's Connect</div>

        <div className="font-medium mx-9">fb | instagram | twitter</div>
      </div>
    </div>
  );
}

export default S_details;
