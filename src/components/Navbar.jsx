import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.vedhanthitechnologies.com/Vedhanthi%20Logo%20Final_PNG.png"
              alt="Vedhanthi Logo"
              style={{ height: '60px', width: '250px' }}
            />
          </Link>
        </div>

        {/* Nav links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </span>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link className="dropdown-item" to="/services/web-application-development">
                    Web Application Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/mobile-application-development">
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/testing-service">
                    Testing Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/devops">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/design-service">
                    Design Service
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="technologiesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technologies
              </span>
              <ul className="dropdown-menu" aria-labelledby="technologiesDropdown">
                <li>
                  <Link className="dropdown-item" to="/technologies/open-source">
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technologies/microsoft-skills">
                    Microsoft Skills
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technologies/native-mobile-app-development">
                    Native Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technologies/hybrid-mobile-app-development">
                    Hybrid Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technologies/qa-automation">
                    QA Automation
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/digital-marketing">Digital Marketing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
