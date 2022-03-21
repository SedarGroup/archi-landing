import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings';
import { onCallClick } from "../../utils";
const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };
  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };
 
  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li onClick={onCallClick}className="nav-item">
                  <div className="nav-link justify-content-center">
                    <a>                    <div className="icon pe-7s-call"></div>
                      <b> +221 76 153 96 35</b></a>
                  </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  A propos
                </span>
                <div className="dropdown-menu">
                  <Link href="/how-it-works">
                    <a className="dropdown-item">Comment ça marche?</a>
                  </Link>
                  <Link href="/about">
                    <a className="dropdown-item">Qui sommes-nous?</a>
                  </Link>
                  <Link href="/contact">
                    <a className="dropdown-item">Contact</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 Votre projet
                </span>
                <div className="dropdown-menu">
                  <Link href="/renovation">
                    <a className="dropdown-item">Rénovation</a>
                  </Link>
                  <Link href="/conception">
                    <a className="dropdown-item">Conception</a>
                  </Link>

                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 Nos offres et services
                </span>
                <div className="dropdown-menu">
                  <Link href="/services/find-architect">
                    <a className="dropdown-item">Trouver un architecte</a>
                  </Link>
                  <Link href="/services/conception">
                    <a className="dropdown-item">Conception et plans</a>
                  </Link>
                  <Link href="/services/building-permit">
                    <a className="dropdown-item">Permis de construire</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/work">
                  <a className="nav-link">Réalisations</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/quote'>
                  <button className="btn-curve btn-color mt-5 nav-link">
                    <span>Estimez votre projet</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
