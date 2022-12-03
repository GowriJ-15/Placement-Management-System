import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="w-full bg-gradient-to-tr from-black to-blue-600 shadow">
      <div className="justify-between md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 ">
            <h2 className="text-2xl font-extrabold text-white font-serif">
              ACCA
            </h2>
          </div>
        </div>
        <div>
          <div>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="font-medium text-white hover:text-blue-100 cursor-pointer">
                <a onClick={()=>navigate("/")}>Home</a>
              </li>

              <li className="font-medium text-white hover:text-blue-100 cursor-pointer">
                <a>About Us</a>
              </li>
              <li className="text-white hover:text-blue-100 font-medium cursor-pointer">
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
