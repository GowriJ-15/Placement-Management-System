import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-max bg-fixed bg-cover bg-[url('https://static-prod.adweek.com/wp-content/uploads/2018/08/search-keywords-jobs-PAGE-2018.gif')] ">
      <div className="flex flex-col items-center justify-center h-screen bg-opacity-50">
        <div>
          <button
            onClick={() => navigate("/student_login")}
            className="w-64 py-1  bg-white hover:bg-gray-100 text-cyan-900 font-bold border border-gray-300 rounded-lg shadow-xl hover:shadow-cyan-800  content-center font-serif ease-out hover:translate-y-1 transition-all shadow-slate-700"
          >
            STUDENT LOGIN
          </button>
        </div>
        <br />
        <div className="">
          <button
            onClick={() => navigate("/pc_login")}
            className="w-64 py-1  bg-white hover:bg-gray-100 text-cyan-900 font-bold border border-gray-300 rounded-lg shadow-slate-700 shadow-xl hover:shadow-cyan-800 content-center font-serif ease-out hover:translate-y-1 transition-all"
          >
            PLACEMENT CELL LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
