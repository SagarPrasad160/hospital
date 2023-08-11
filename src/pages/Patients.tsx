import PatientsList from "../components/PatientsList";

import { User } from "../models/User";

interface PatientsProps {
  patients: User[];
  removePatient: (id: string) => void;
}

export default function Patients({ patients, removePatient }: PatientsProps) {
  return (
    <div className="patients-list">
      <div className="row">
        <div className="col-md-9  mx-auto">
          <PatientsList patients={patients} removePatient={removePatient} />
        </div>
      </div>
    </div>
  );
}
