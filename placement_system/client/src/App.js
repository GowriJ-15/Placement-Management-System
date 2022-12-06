import "./index.css";
import StudentSignup from "./Pages/Student";
import StudentLogin from "./Pages/s_login";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PcLogin from "./Pages/p_login";
import Home from "./Pages/Home";
import CompanySignup from "./Pages/CompanySignup";
import S_details from "./Pages/S_details";


function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [admno,setAdmno] = useState("");
  const [cgpa,setCgpa] = useState("");
  const [backlog,setBacklog] = useState("");
  const [cname,setcname] = useState("");
  const [cid,setcid] = useState("");
  const [ccgpa,setccgpa] = useState("");

  const [userDetails,setUserDetails] = useState([])
  


  return (
    <div>
      {
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student_login" element={<StudentLogin setUserDetails={setUserDetails}/>} />
          <Route path="/student_details" element={<S_details userDetails={userDetails}/>} />
          <Route path="/pc_login" element={<PcLogin />} />
          <Route
            path="/student_signup"
            element={
              <StudentSignup
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                cgpa={cgpa}
                setCgpa={setCgpa}
                admno={admno}
                setAdmno={setAdmno}
                backlog={backlog}
                setBacklog={setBacklog}
              />
            }
          />
          <Route path="/company_reg" element={<CompanySignup cname={cname} setcname={setcname} cid={cid} setcid={setcid} ccgpa={ccgpa} setccgpa={setccgpa} />} />
          
        </Routes>
      </Router>
          }
      
      
    </div>
  );
}

export default App;
