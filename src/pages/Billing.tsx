import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// models
import { appointment } from "../models/Appointment";

// utility
import { removeDuplicateUsers } from "../utils/removeDuplicates";

interface BillingProps {
  appointments: appointment[];
}

function Billing({ appointments }: BillingProps) {
  // get users from appointments array
  const users = appointments.map((appointment) => appointment.user);

  const fileteredUsers = removeDuplicateUsers(users);

  const [userAppointments, setUserAppointments] = useState<appointment[]>([]);

  const params = useParams();
  const id = Object.values(params)[0];

  useEffect(() => {
    // check if there exists an id in the params
    if (id) {
      // find all the appointments of the user with that id
      const allUserAppointments = appointments.filter(({ user }) => {
        return user.id === id;
      });
      setUserAppointments(allUserAppointments);
    }
  }, [id, appointments]);

  const renderedUsers = fileteredUsers.map((patient) => {
    return (
      <li
        className="list-group-item d-flex flex-wrap w-100  mx-auto mb-1"
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
          <Link to={`/billing/${patient.id}`} className="btn btn-success">
            View Prescription
          </Link>
        </div>
      </li>
    );
  });

  const renderedAppointments = userAppointments.map((usrApt, index) => {
    return (
      <tr key={usrApt.service}>
        <th scope="row">{index + 1}</th>
        <td>{usrApt.user.name}</td>
        <td>{usrApt.service}</td>
        <td>{usrApt.quantity}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h1>Billing Overview</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">{renderedUsers}</ul>
        </div>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.no</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Service Type</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>{renderedAppointments}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Billing;
