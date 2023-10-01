const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light  shadow fixed-top">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      {/* Create the dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="modelMasterDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          AutoVision
        </button>
        <div className="dropdown-menu" aria-labelledby="modelMasterDropdown">
          {/* Dropdown links */}
          <a className="dropdown-item" href="Algorithms.html">
            {/* <img src="images/new-project-logo.jpg" width="50" height="50" alt="New Project"> */}
            New Project
          </a>
          <a className="dropdown-item" href="#" id="openProject">
            {/* <img src="images/open-project-logo.png" width="50" height="50" alt="New Project"> */}
            Open Project from File
            <input
              type="file"
              id="fileInput"
              accept=".json, .pb, .h5, .hdf5, .ckpt, .pt, .pth, .pkl, .onnx, .caffemodel, .prototxt, .params, .json, .pickle, .ts, .pmml"
              onchange="handleFileSelect(this)"
            />
          </a>
          <a className="dropdown-item" href="#">
            {/* <img src="images/save-project-logo.jpeg"  width="50" height="50"  alt="Save Project"> */}
            Save Project
          </a>
          <a className="dropdown-item" href="#About">
            About AutoVision
          </a>
          <a className="dropdown-item" href="FAQS.html">
            FAQs
          </a>
        </div>
      </div>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="FAQS.html">
                FAQs
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <button type="button" className="btn btn-primary">
              Login
            </button>
            <button type="button" className="btn btn-success ml-2">
              Signup
            </button>
            {/* <img class="rounded-circle ml-2" src="images/Logo.png" width="40px" height="40px" alt=""> */}
          </form>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default NavBar