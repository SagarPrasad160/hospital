import { Link, useLocation } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { LiaUserInjuredSolid } from "react-icons/lia";

export default function NavBar() {
  const { pathname } = useLocation();

  function closeOffcanvas() {
    const offcanvas = document.getElementById("offcanvasNavbar")!;
    const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Hospital Management
        </Link>
        <button
          className="navbar-toggler bg-body-tertiary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              LOGO
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                  onClick={closeOffcanvas}
                >
                  <AiOutlineAppstore />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/patient" ? "active" : ""
                  }`}
                  to="/patient"
                  onClick={closeOffcanvas}
                >
                  <LiaUserInjuredSolid />
                  Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/appointments" ? "active" : ""
                  }`}
                  to="/appointments"
                  onClick={closeOffcanvas}
                >
                  <BiSolidCalendarEdit />
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/billing" ? "active" : ""
                  }`}
                  to="/billing"
                  onClick={closeOffcanvas}
                >
                  <RiBillLine />
                  Billing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
