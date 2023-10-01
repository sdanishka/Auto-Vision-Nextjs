const OpenFile = () => {
  return (
    <>
    <h2
      className="title text-primary"
      style={{ fontWeight: "bolder", fontSize: 44, letterSpacing: "0.5em" }}
    >
      NEW PROJECT
    </h2>
    <div className="container mt-5">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#openModal"
      >
        Open an existing project from a file
      </button>
    </div>
    {/* Modal */}
    <div
      className="modal fade"
      id="openModal"
      tabIndex={-1}
      aria-labelledby="openModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="openModalLabel">
              Open Project
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="projectFile">Select a project file:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="projectFile"
                  accept=".pb, .h5, .hdf5, .ckpt, .pt, .pth, .pkl, .onnx, .caffemodel, .prototxt, .params, .json, .pickle, .ts, .pmml"
                  onchange="checkFile(this)"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="openButton"
              disabled=""
            >
              {" "}
              <a
                href="Algorithms-Implementation/Face-Detection.html"
                style={{ color: "white" }}
              >
                Open
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default OpenFile