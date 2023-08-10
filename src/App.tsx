import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Dashboard</div>} />
          <Route path="/patient" element={<div>Patients</div>} />
          <Route path="/appointments" element={<div>Appointments</div>} />
          <Route path="/billing" element={<div>Billing</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
