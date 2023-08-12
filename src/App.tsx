import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// components
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

// utility
import { faker } from "@faker-js/faker";

//  models
import { createRandomUser } from "./utils/createRandomUser";
import { User } from "./models/User";
import { appointment } from "./models/Appointment";

// pages
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";

function getUsers(): User[] {
  // fetch users from local Storage
  const usersJSON = localStorage.getItem("users");
  // create a new set of users if usersJSON is undefined
  if (!usersJSON) {
    // create 10 random users
    const USERS: User[] = faker.helpers.multiple(createRandomUser, {
      count: 10,
    });
    localStorage.setItem("users", JSON.stringify(USERS));
    return USERS;
  }
  // return the USERS
  return JSON.parse(usersJSON);
}

function App() {
  const [records, setRecords] = useState<User[]>(getUsers());
  const [appointments, setAppointments] = useState<appointment[]>([]);

  const addRecord = () => {
    const newRecord = createRandomUser();
    setRecords([...records, newRecord]);
    // Add to Local Storage
    const users = getUsers();
    users.push(newRecord);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const removeRecord = (id: string) => {
    setRecords(records.filter((record) => record.id !== id));
    // Remove from localStorage
    let users = getUsers();
    users = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const addAppointment = (appointment: appointment) => {
    setAppointments([...appointments, appointment]);
  };

  console.log(appointments);

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
                <Patients
                  patients={records}
                  removePatient={removeRecord}
                  addPatient={addRecord}
                />
              }
            />
            <Route
              path="/appointments/*"
              element={
                <Appointments
                  patients={records}
                  addAppointments={addAppointment}
                />
              }
            />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
