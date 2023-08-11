import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<div className="">Dashboard</div>} />
            <Route path="/patient" element={<div>Patients</div>} />
            <Route path="/appointments" element={<div>Appointments</div>} />
            <Route path="/billing" element={<div>Billing</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
