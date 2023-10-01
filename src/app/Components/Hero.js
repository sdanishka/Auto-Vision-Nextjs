import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div className="contain-text">
        <br></br><br></br><br></br>
        <h2 className="title text-primary me-auto">AutoVision </h2>
        <p className="" style={{ color: 'black', fontSize: 30 }}>
          <b>An Automatic Machine Learning Tool for Computer vision tasks</b>
        </p>
        <p
          className="text-dark lead"
          style={{
            fontFamily:
              '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
          }}
        >
          A fast, easy way to create machine learning models for your sites,
          apps, and more – no expertise or coding required.
        </p>
        <button type="button" className="btn btn-primary btn-lg">
            <Link href={"/Faqs"} className="nav-link text-light ">Get Started</Link>
        </button>
      </div>
      <div className="picture me-auto">
        <img src="Images/front-img.jpg" height={300} width={400} alt="#" />
      </div>
    </div>
  );
};

export default Hero;
