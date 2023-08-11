import { useParams } from "react-router-dom";

export default function Appointments() {
  const params = useParams();

  const id = Object.values(params)[0];
  console.log(id);
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="patientName" className="form-label">
          Patient Name
        </label>
        <input
          type="text"
          className="form-control"
          id="patientName"
          aria-describedby="patientName"
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
        >
          <option defaultValue={"Choose Service"}>Choose Service</option>
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
