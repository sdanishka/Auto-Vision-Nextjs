const TrainTest = () => {
  return (
    <>
     <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AutoVision - Face-Detection</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      background-color:blue;\n    }\n \n    .card {\n      border: none;\n      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n      transition: transform 0.3s ease;\n      max-width: 100%;\n    }\n    .card:hover {\n      transform: translateY(-5px);\n    }\n    .card-title {\n      font-size: 1rem;\n      color: #333;\n      margin-bottom: 0.5rem;\n    }\n    .card-text {\n      color: #666;\n    }\n    .navbar-brand {\n    font-size: 30px; /* Increase navbar brand font size */\n    font-weight: bold;\n    color: #333;\n  }\n\n  .title {\n    text-align: center;\n    font-size: 36px;\n    color: #333;\n    margin-top: 30px;\n  }\n\n  .container {\n    text-align: center;\n    margin-top: 20px;\n  }\n\n  html {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.container.mt-5 {\n  flex: 1;\n}\nbody {\n      background-color: #f8f9fa;\n      margin: 0; /* Remove default margin */\n      padding: 0; /* Remove default padding */\n    }\n\n    .wrapper {\n      display: flex;\n      flex-direction: column;\n      min-height: 100vh; /* Minimum height of the viewport */\n    }\n    /* Style your footer to stay at the bottom */\n    footer {\n      margin-top: auto; /* Push footer to the bottom */\n      background-color: #343a40;\n      color: white;\n      padding: 10px 0;\n    }\n    .centered-card {\n      max-width: 300px; /* Adjust the card's width as needed */\n    }\n\n   \n  "
    }}
  />
  
  <div className=" p-2   mb-2 w-100 " style={{ marginTop: "5rem" }}>
    <div id="cardContainer" className=" w-100 p-2">
      {/* The initial card */}
      <div
        className="row  w-100 p-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="col-12 col-md-6 col-lg-4  p-2 w-25 ">
          <div className="card ">
            <div className="card-body ">
              <input
                type="text"
                className="card-title mb-2"
                placeholder="Class 1"
              />
              <p className="card-text">Import dataset or you create new here</p>
              <div>
                <button className="btn btn-primary" onclick="startWebcam(this)">
                  Start Webcam
                </button>
                <label className="btn btn-secondary">
                  Upload{" "}
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    onchange="handleUpload(this)"
                  />
                </label>
              </div>
              <div className="webcam-container" />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary add-card-button">
              Add New Class
            </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div
      className="  d-flex justify-content-center align-items-center p-2"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="card text-center border w-50">
        <div
          className="list-group-item list-group-item-action active"
          aria-current="true"
          style={{ fontSize: 15 }}
        >
          TRAINING
        </div>
        <div className="card-body">
          <h5 className="card-title">Train the Model with the above dataset</h5>
          <a href="#" className="btn btn-primary">
            Train
          </a>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div
      className="d-flex justify-content-center align-items-center p-2"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="card text-center border w-50">
        <div
          className="list-group-item list-group-item-action active"
          aria-current="true"
          style={{ fontSize: 15 }}
        >
          Testing
        </div>
        <div className="card-body">
          <h5 className="card-title">Test the train Model</h5> <br />
          <a href="#" className="btn btn-primary" style={{ marginRight: 250 }}>
            Test
          </a>
          {/* Add margin-right to the Test button */}
          <a href="#" className="btn btn-primary">
            Download the model
          </a>
        </div>
        <a href="#" className="btn btn-primary">
          Get the Code here
        </a>
      </div>
    </div>
  </div>
    </>
  )
}

export default TrainTest