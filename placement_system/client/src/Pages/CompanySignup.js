import React from "react";

import Axios from "axios";
import Navbar from "../Components/Navbar";

function CompanySignup({ cname, setcname, ccgpa, setccgpa, cid, setcid }) {
  const companyregister = () => {
    Axios.post("http://localhost:3001/auth/cregister", {
      cname: cname,
      cid: cid,
      ccgpa: ccgpa,
    }).then((response) => {
      console.log(response);
    });
  };
 
  return (
    <div>
      <div className="">
       <nav>
        <Navbar/>
       </nav>
        <div className=" flex-col  relative w-full flex justify-center items-center">
          <form className="flex justify-center items-center flex-col p-8 mt-9  border rounded-lg h-max w-full bg-white shadow-2xl shadow-slate-600 max-w-[700px]  ">
            <div>
              <h1 className="p-2 text-center font-extrabold tracking-tight leading-none pb-0 text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-800">
                Company Registration
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row mb-4  pt-8 ">
                <label className="font-medium">Company Name</label>
                <input
                  className="border-relative bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none shadow-lg mx-1 w-48"
                  type="text"
                  onChange={(e) => {
                    setcname(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-row mb-4 pt-2">
                <label className="font-medium">Company ID</label>
                <input
                  className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none mx-8 px-2 w-48"
                  type="number"
                  step="any"
                  onChange={(e) => {
                    setcid(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row mb-4 pt-2">
                <label className="font-medium">Required CGPA</label>
                <input
                  className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none mx-3 px-1 w-48"
                  type="number"
                  onChange={(e) => {
                    setccgpa(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center pt-4">
                <button
                  onClick={companyregister}
                  type="submit"
                  className=" px-8 py-1 bg-gradient-to-tr from-black to-blue-700 relative text-white border  rounded content-center ease-out hover:translate-y-1 transition-all font-semibold font-serif"
                >
                  REGISTER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanySignup;
