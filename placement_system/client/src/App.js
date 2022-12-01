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
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/student_login"
              element={
                <StudentLogin username={username} setUsername={setUsername} />
              }
            />
            <Route path="/pc_login" element={<PcLogin />} />
            <Route
              path="/student_signup"
              element={
                <StudentSignup
                  usernameReg={usernameReg}
                  setUsernameReg={setUsernameReg}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  passwordReg={passwordReg}
                  setPasswordReg={setPasswordReg}
                />
              }
            />
            <Route path="/company_reg" element={<CompanySignup />} />
          </Routes>
        </Router>
      }
      {/*<S_details/>*/}
    </div>
  );
}

export default App;
