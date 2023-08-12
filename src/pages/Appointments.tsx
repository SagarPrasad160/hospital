import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { User } from "../models/User";
import { appointment } from "../models/Appointment";
import { Service } from "../models/Service";

interface AppointmentsPageProps {
  patients: User[];
  addAppointments: (appointment: appointment) => void;
}

export default function Appointments({
  patients,
  addAppointments,
}: AppointmentsPageProps) {
  const [name, setName] = useState<string>("");
  const [service, setService] = useState<string>("");

  const params = useParams();

  const id = Object.values(params)[0];
  useEffect(() => {
    if (id) {
      const patient = patients.find((patient) => patient.id === id);
      console.log(patient?.name);
      if (patient) {
        setName(patient.name);
      }
    }
  }, [id, patients]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // confirm name given with the patient records
    const patient = patients.find((patient) => patient.name === name);
    if (!patient) {
      alert("Patient does not exists!");
      return;
    }
    // check if the selected service is one of the valid service types
    if (
      !["Consultation", "XRay", "RoutineCheckup", "CTScan"].includes(service)
    ) {
      alert("Please choose a valid service!");
      return;
    }
    const newAppointment: appointment = {
      user: patient,
      service: service as Service,
      quantity: 1,
    };
    addAppointments(newAppointment);

    // reset form fields
    setName("");
    setService("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="patientName" className="form-label">
          Patient Name
        </label>
        <input
          type="text"
          className="form-control"
          id="patientName"
          aria-describedby="patientName"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="serviceSelect" className="form-label">
          Select Service
        </label>
        <select
          className="form-select"
          id="serviceSelect"
          aria-label="select a service  with button addon"
          value={service}
          onChange={({ target }) => setService(target.value)}
        >
          <option value="">Choose Service</option>
          <option value="Consultation">Consultation</option>
          <option value="XRay">XRay</option>
          <option value="RoutineCheckup">Routine Checkup</option>
          <option value="CTScan">CT Scan</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Book
      </button>
    </form>
  );
}
