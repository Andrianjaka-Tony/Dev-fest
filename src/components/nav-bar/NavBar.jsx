import React, { useEffect, useState } from "react";
import "./NavBar.scss";

function NavBar({ lenis }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    handleScroll(open);
  }, [open]);

  const handleScroll = (stop) => {
    if (stop) lenis.stop();
    else lenis.start();
  };
  return (
    <>
      <div className="nav-bar-container">
        <div className={`nav-bar-header ${open ? "open_nav" : ""}`}>
          <div className="logo-container">
            <img src={""} alt="logo" />
          </div>
          <div className="menu-icon " onClick={handleOpen}>
            <div className={`bar ${open ? "up_" : ""}`}></div>
            <div className={`bar ${open ? "down_" : ""}`}></div>
          </div>
        </div>

        <div className={`nav-bar-content ${open ? "open_content" : ""}`}>
          <div className="list_">
            <div className={`nav-bar-item ${open ? "show" : ""}`}>Login</div>
            <div className={`nav-bar-item ${open ? "show" : ""}`}>Join us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
