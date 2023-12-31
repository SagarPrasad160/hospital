import { useState } from "react";

import { AiOutlineAlignCenter } from "react-icons/ai";
import NavModal from "./NavModal";

export default function NavBar() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <nav className="navbar nav">
      <div className="navbar-header d-flex justify-content-between p-2 w-100">
        <div className="navbar-brand text-white">Hospital Management</div>
        <button className="btn btn-light show-btn" onClick={handleClick}>
          <AiOutlineAlignCenter />
        </button>
        {showModal && <NavModal setShowModal={setShowModal} />}
      </div>
    </nav>
  );
}
