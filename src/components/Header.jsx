import React from "react";
import shop_Logo from "../images/Plenuu_logo_main.png";

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="sub-head-one">
          <img src={shop_Logo} alt="" />
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Vendor</li>
            <li>
              <i className="bi bi-list"></i>
            </li>
          </ul>
        </div>
        <div className="sub-head-two">
          <form>
            <input type="search" placeholder="Search..." name="search" />
            <button type="submit" className="btn btn-outline">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul>
            <li style={{ marginLeft: "-10px" }}>
              <i className="bi bi-cart2"></i>
            </li>
            <li style={{ marginLeft: "20px", marginRight: "5px" }}>
              <i className="bi bi-person"></i>
            </li>
          </ul>
        </div>
      </header>

      {/* <div className="d-flex justify-content-between">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="#">
            <img src={shop_Logo} alt="" style={{ width: "100px" }} />
          </a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Vendor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="d-flex">
            <li style={{}}>
              <i className="bi bi-cart2"></i>
            </li>
            <li style={{}}>
              <i className="bi bi-person"></i>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand " href="#">
              Navbar
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
      {/* <nav>
        <div>
          <img src={shop_Logo} alt="" style={{ width: "6%" }} />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav> */}
    </React.Fragment>
  );
}

export default Header;
