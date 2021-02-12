import React, { useState } from "react";
import "./Navbar.scss";
import CDropdown from "./dropdown/CatDropdown";
import UniDropdown from "./dropdown/UniDropdown";
import { Link } from "react-router-dom";

export const NavItems = [
  {
    index: 1,
    title: "Course Recommendation",
    path: "/course-recommendation",
    cName: "dropdown-link",
  },
  {
    index: 2,
    title: "For Organisation",
    path: "/organisation",
    cName: "dropdown-link",
  },
  {
    index: 3,
    title: "Discussion forum",
    path: "/forum",
    cName: "dropdown-link",
  },
  {
    index: 4,
    title: "Blog",
    path: "/blog",
    cName: "dropdown-link",
  },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [uniClick, setUniClick] = useState(false);
  const [uniDropdown, setUniDropdown] = useState(false);

  const onUniMouseEnter = () => {
    if (window.innerWidth < 960) {
      setUniDropdown(false);
    } else {
      setUniDropdown(true);
    }
  };

  const onUniMouseLeave = () => {
    if (window.innerWidth < 960) {
      setUniDropdown(false);
    } else {
      setUniDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbars">
        <Link to="/" className="navbars-logo">
          <div className="d-flex justify-content-between">
            <div
              className="d-flex align-items-center"
              style={{ width: "220px" }}
            >
              <div style={{ width: "100%" }}>
                <img src="j_logo.svg" />
              </div>
              <span
                className="ml-1 pl-1 border-left text-white"
                style={{ fontSize: "12px" }}
              >
                Program Finder
              </span>
            </div>
          </div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className={dropdown ? "nav-item active-nav-item" : "nav-item"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/category"
              className={dropdown ? "nav-links active-nav-links" : "nav-links"}
              onClick={() => setDropdown(!dropdown)}
            >
              Category <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <CDropdown />}
          </li>
          <li
            className={uniDropdown ? "nav-item active-nav-item" : "nav-item"}
            onMouseEnter={onUniMouseEnter}
            onMouseLeave={onUniMouseLeave}
          >
            <Link
              to="/university"
              className={
                uniDropdown ? "nav-links active-nav-links" : "nav-links"
              }
              onClick={() => setUniDropdown(!uniDropdown)}
            >
              Universities <i className="fas fa-caret-down" />
            </Link>
            {uniDropdown && <UniDropdown />}
          </li>
          {NavItems.map((item) => {
            return (
              <li key={item.index} className="nav-item">
                <Link
                  to={item.path}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
