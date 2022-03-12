import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 ms-auto">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  Navbar
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/main/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeclassName="menu_active"
                        to="/main/services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeclassName="menu_active"
                        to="/main/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeclassName="menu_active"
                        to="/main/contactus"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeclassName="menu_active"
                        to="/admin/addEquipment"
                      >
                        AddEquipment
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link btn-style"
                        activeclassName="menu_active"
                        to="/main/browseEquipment"
                      >
                        BrowseEquipment
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link btn-style"
                        activeclassName="menu_active"
                        to="/main/viewEquipment"
                      >
                        ViewEqiupment
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link btn-style"
                        activeclassName="menu_active"
                        aria-current="page"
                        to="/main/login"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link btn-style"
                        activeclassName="menu_active"
                        to="/main/signup"
                      >
                        Signup
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
