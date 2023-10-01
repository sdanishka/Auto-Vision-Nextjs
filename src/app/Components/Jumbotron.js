const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-white d-flex flex-column justify-content-center align-items-center p-3">
    <h2 className="text-center mt-3" style={{ fontWeight: "bold" }}>
      <u>How do I use It ?</u>
    </h2>
    <div
      className="vision d-flex justify-content-center align-items-center  p-5"
      style={{ gap: "2rem" }}
    >
      <div className="vision_Text p-3">
        <img src="images/train2.svg" width="250px" alt="" />
        <div className="container mt-3">
          <h4>1.Gather</h4>
          <p className="lead">
            Gather and group your examples into classes, or categories, that you
            want the computer to learn.
          </p>
        </div>
      </div>
      <div className="vision_Text p-3">
        <img src="images/train1.svg" width="250px" alt="" />
        <div className="container mt-3">
          <h4>2. Train</h4>
          <p className="lead">
            Train your model, then instantly test it out to see whether it can
            correctly classify new examples.
          </p>
        </div>
      </div>
      <div className="vision_Text p-3 overflow-auto">
        <img src="images/train4.svg" width="220px" alt="" />
        <div className="container mt-3">
          <h4>3. Export</h4>
          <p className="lead">
            Export your model for your projects: sites, apps, and more. You can
            download your model or host it online.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Jumbotron