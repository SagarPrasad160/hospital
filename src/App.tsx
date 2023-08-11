import { useState } from "react";
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
import Appointments from "./pages/Appointments";

const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 10,
});

function App() {
  const [records, setRecords] = useState<User[]>(USERS);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addRecord = () => {
    const newRecord = createRandomUser();
    setRecords([...records, newRecord]);
  };

  const removeRecord = (id: string) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<div className="">Dashboard</div>} />
            <Route
              path="/patient"
              element={
                <Patients patients={records} removePatient={removeRecord} />
              }
            />
            <Route path="/appointments/*" element={<Appointments />} />
            <Route path="/billing" element={<div>Billing</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
