const About = () => {
  return (
    <div
  className="AboutSection bg-white d-flex flex-column justify-content-center align-items-center   "
  id="About"
>
  <h1
    className="title text-center mb-4 mt-5"
    style={{ fontFamily: '"Poppins", sans-serif' }}
  >
    About AutoVision
  </h1>
  <div className=" about w-75   rounded p-4">
    <div className=" pic p-2 d-flex flex-column justify-content-center align-items-center ">
      <img src="images/poster.jpg" alt="" />
      <p
        className="w-75 lead "
        style={{ marginTop: 150, textAlign: "justify" }}
      >
        AutoVision is a computer vision website that allows users to interact
        with various computer vision algorithms through an intuitive graphical
        user interface (GUI). It is built using ReactJS for the frontend and
        Python for the backend.
      </p>
    </div>
  </div>
</div>

  )
}

export default About