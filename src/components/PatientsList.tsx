import { Link } from "react-router-dom";

import { User } from "../models/User";
import { FaX } from "react-icons/fa6";

interface PatientsProps {
  patients: User[];
  removePatient: (id: string) => void;
}

function PatientsList({ patients, removePatient }: PatientsProps) {
  const renderedPatients = patients.map((patient) => {
    return (
      <div key={patient.id}>
        <li
          className="list-group-item d-flex w-100  mx-auto mb-1"
          key={patient.id}
        >
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
            <Link
              to={`/appointments/${patient.id}`}
              className="btn btn-success"
            >
              Book an Appointment
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => removePatient(patient.id)}
            >
              <FaX />
            </button>
          </div>
        </li>
      </div>
    );
  });

  return (
    <div>
      {" "}
      <ul className="list-group">{renderedPatients}</ul>
    </div>
  );
}

export default PatientsList;
