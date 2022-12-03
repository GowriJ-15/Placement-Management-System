import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function PcLogin() {
  const navigate = useNavigate();

  return (
    <div className="">
      <nav>
        <Navbar/>
      </nav>
      <div className="relative w-full flex items-center justify-center flex-col mt-7">
        <form className="bg-white max-w-[700px] w-full  mx-auto  p-8 border  rounded-lg shadow-slate-600 shadow-2xl flex justify-center items-center flex-col h-96">
          <h2 className=" p-2 text-center font-extrabold tracking-tight leading-none pb-6 text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-tr from-black to-blue-800">
            Placement Cell Login
          </h2>
          <div className="flex flex-row mb-4  items-center justify-center pt-5">
            <label className="font-bold p-1">Username</label>
            <input
              className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
              type="text"
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
                  onClick={() => navigate("/company_reg")}
                  type="submit"
                  className=" px-8 py-1 bg-gradient-to-tr from-black to-blue-700  relative text-white border rounded content-center ease-out hover:translate-y-1 transition-all font-semibold font-serif"
                >
                  login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
