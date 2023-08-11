import { User } from "../models/User";

import { FaX } from "react-icons/fa6";

interface PatientsProps {
  patients: User[];
}

export default function Patients({ patients }: PatientsProps) {
  const renderedPatients = patients.map((patient) => {
    return (
      <li className="list-group-item d-flex w-100  mx-auto mb-1">
        <div>
          <img
            className="rounded-circle image-fluid mt-4"
            src={patient.avatar}
            alt="User Image"
          />
        </div>
        <div className="p-4">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">
            <span className="px-2"> {patient.age}</span>
            {patient.sex[0].toUpperCase() + patient.sex.slice(1)}.
          </p>
          <p className="fw-bold">{patient.address}</p>
          <button className="btn btn-primary">Book an Appointment</button>
          <button className="btn btn-danger">
            <FaX />
          </button>
        </div>
      </li>
    );
  });
  return <ul className="list-group">{renderedPatients}</ul>;
}
