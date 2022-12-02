import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


function CompanySignup({cname,setcname,ccgpa,setccgpa,cid,setcid}) {
  const companyregister = () => {
    Axios.post("http://localhost:3001/companyregister", {
     cname:cname,
     cid:cid,
     ccgpa:ccgpa
    }).then((response) => {
      console.log(response);
    });
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
      <div className="float-right font-semibold tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 mr-5 mt-4 flex flex-row mb-0 pb-0">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrHlsZ0BO6iQUOQRxGqreTYCWLVAxmQyaTw&usqp=CAU"
              width="20"
            />
          </div>
          <div className="mx-1 cursor-pointer">
            <a onClick={() => navigate("/")}> Home</a>
          </div>
        </div>
        <div className=" flex-col  relative w-full h-screen flex justify-center items-center pt-0">
          
            <form
              action="#"
              className="flex justify-center items-center flex-col p-8 pb-7 m-7 border rounded-lg h-max w-full bg-white shadow-2xl shadow-slate-600 max-w-[700px]  ">
              <div>
                <h1 className="p-2 text-center font-extrabold tracking-tight leading-none pb-0 text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600">
                  Company Registration
                </h1>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row mb-4  pt-8 ">
                  <label className="font-medium">Company Name</label>
                  <input
                    className="border-relative bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none shadow-lg mx-1 w-48"
                    type="text"
                    onChange={(e)=>{
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
                    onChange={(e)=>{
                      setcid(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row mb-4 pt-2">
                  <label className="font-medium">Required CGPA</label>
                  <input
                    className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none mx-3 px-1 w-48"
                    type="number"
                    onChange={(e)=>{
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
                    className=" px-8 py-1 bg-gradient-to-tr from-black to-pink-600 relative text-white border  rounded content-center ease-out hover:translate-y-1 transition-all font-semibold font-serif"
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
