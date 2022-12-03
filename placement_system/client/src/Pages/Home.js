import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import S_Navbar from "../Components/S_Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="">
      
      <div className="relative w-full h-screen bg-fixed bg-cover bg-[url('https://www.careerguide.com/career/wp-content/uploads/2021/01/0fb047326b3c85e9d1e57b159d21935c531c-600x450.gif')] ">
        <div className="flex-row">
          <div className="flex flex-col items-center justify-center h-screen bg-opacity-50">
            <div>
              <button
                onClick={() => navigate("/student_login")}
                className="w-64 py-1  bg-white hover:bg-gray-100 text-blue-900 font-bold border border-gray-300 rounded-lg shadow-xl hover:shadow-cyan-800  content-center font-serif ease-out hover:translate-y-1 transition-all shadow-slate-700"
              >
                STUDENT LOGIN
              </button>
            </div>
            <br />
            <div className="">
              <button
                onClick={() => navigate("/pc_login")}
                className="w-64 py-1  bg-white hover:bg-gray-100 text-blue-900 font-bold border border-gray-300 rounded-lg shadow-slate-700 shadow-xl hover:shadow-cyan-800 content-center font-serif ease-out hover:translate-y-1 transition-all mt-2"
              >
                PLACEMENT CELL LOGIN
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
