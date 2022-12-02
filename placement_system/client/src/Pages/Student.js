import Axios from "axios";

import { useNavigate } from "react-router-dom";

function StudentSignup({
  name,setName,email,setEmail,password,setPassword,admno,setAdmno,cgpa,setCgpa,backlog,setBacklog
}) {
  const register = () => {
    Axios.post("http://localhost:3001/auth/register", {
     name : name,
     email : email,
      password: password,
      admno:admno,
      cgpa:cgpa,
      backlog:backlog
    }).then((response) => {
      console.log(response);
    });
  };

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className=" relative w-full h-screen ">
        <div className="float-right font-semibold tracking-tight leading-none font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 mr-5 mt-4 mb-6 flex flex-row ">
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
        <div>
          <div className="flex justify-center items-center">
            
          </div>
          <div className="flex justify-center items-center flex-col pt-7">
            <div className="">
              <form
                action="#"
                className="p-8 pb-10 m-7 border rounded-lg h-full w-full bg-white shadow-2xl shadow-slate-600"
              >
                <h1 className="p-2 pt-0 text-center font-extrabold tracking-tight leading-none text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 pb-4">
              Sign Up
            </h1>
                <div className="flex flex-row">
                  <div className="w-2/4 mr-6">
                    <div className="font-bold mb-4 px-20 text-lg">
                      <h1>Personal Details</h1>
                    </div>
                    <div className="flex flex-col mb-4 w-72 ">
                      <label className="font-medium">Name</label>
                      <input
                        className="border-relative bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none shadow-lg"
                        type="text"
                        onChange={(e)=>{
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="flex flex-col mb-4 w-72">
                      <label className="font-medium">Email</label>
                      <input
                        className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex flex-col mb-4 w-72">
                      <label className="font-medium">Create Password</label>
                      <input
                        className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none appearance-none"
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-2/4 ml-6">
                    <div className="font-bold mb-4 px-20 text-lg">
                      <h1>Academic Details</h1>
                    </div>
                    <div className="flex flex-col mb-4 w-72">
                      <label className="font-medium">Admission number</label>
                      <input
                        className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
                        type="number"
                        step="any"
                        onChange={(e)=>{
                          setAdmno(e.target.value)
                        }}
                      />
                    </div>
                    <div className="flex flex-col mb-4 w-72">
                      <label className="font-medium">CGPA(out of 10)</label>
                      <input
                        className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
                        type="number"
                        step="any"
                        required
                        onChange={(e)=>{
                          setCgpa(e.target.value)
                        }}
                      />
                    </div>

                    <div className="flex flex-col mb-4 w-72">
                      <label className="font-medium">No: of backlog(s)</label>
                      <input
                        className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
                        type="number"
                        onChange={(e)=>{
                          setBacklog(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={register}
                      type="submit"
                      className=" px-8 py-1 bg-gradient-to-tr from-black to-pink-600 relative text-white border  rounded content-center ease-out hover:translate-y-1 transition-all font-semibold font-serif"
                    >
                      SIGN UP
                    </button>
                  </div>
                </div>
              </form>

              <div className="font-semibold tracking-tight leading-none pb-0 text-transparent bg-clip-text bg-gradient-to-tr from-black to-pink-600 flex justify-center items-center">
                <p className="float:right   p-2">
                  already a member?
                  <u>
                    <a
                      onClick={() => navigate("/student_login")}
                      className="float:right hover:text-pink-900 p-2 cursor-pointer"
                    >
                      Sign in
                    </a>
                  </u>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentSignup;
