import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// components imports
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

// utility imports
import { faker } from "@faker-js/faker";
import { createRandomUser } from "./utils/createRandomUser";
import { User } from "./models/User";

// page imports
import Patients from "./pages/Patients";

const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 10,
});

function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<div className="">Dashboard</div>} />
            <Route path="/patient" element={<Patients patients={USERS} />} />
            <Route path="/appointments" element={<div>Appointments</div>} />
            <Route path="/billing" element={<div>Billing</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
