import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function StudentLogin({}) {
  const navigate = useNavigate();

  return (
    <div className="">
      <div>
        <Navbar/>
      </div>

      <div className="relative w-full float-right mt-7">
        <form className=" max-w-[700px] h-82 mt-4 mx-auto  p-8 border  rounded-lg shadow-2xl shadow-slate-700">
          <h2 className=" p-2 text-center font-extrabold tracking-tight leading-none pb-6 text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-800">
            Student Login
          </h2>

          <div className="flex flex-row mt-1 mb-4  items-center justify-center">
            <label className="font-bold p-3">Email ID</label>
            <input
              className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
              type="email"
            />
          </div>

          <div className="relative flex flex-row items-center justify-center">
            <label className="font-bold p-2">Password</label>
            <input
              className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
              type="password"
              name="password"
            />
          </div>

          <div>
            <div className="flex justify-center items-center flex-col">
              <div className="p-4">
                <button
                  onClick={()=>navigate("/student_details")}
                  type="submit"
                  className=" px-8 py-1 mt-3 bg-gradient-to-tr from-black to-blue-600  relative text-white border rounded content-center ease-out hover:translate-y-1 transition-all font-semibold font-serif"
                >
                  login
                </button>
              </div>

              <div className="font-semibold tracking-tight leading-none pb-0 text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-600">
                <p className="float:right   p-2">
                  Not a member?
                  <u>
                    <a
                      onClick={() => navigate("/student_signup")}
                      className="float:right hover:text-pink-900 p-2 cursor-pointer"
                    >
                      Signup</a>
                  </u>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
