import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function StudentLogin({}) {
  const [loginStatus, setLoginStatus] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true;
  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        username: username,

        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="">
      <div>
        <Navbar />
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
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="relative flex flex-row items-center justify-center">
            <label className="font-bold p-2">Password</label>
            <input
              className="border-relative shadow-lg bg-gray-100 p-1 border rounded-lg dark:border-gray-300 outline-none"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <div className="flex justify-center items-center flex-col">
              <div className="p-4">
                <button
                  onClick={login}
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
                      Signup
                    </a>
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
