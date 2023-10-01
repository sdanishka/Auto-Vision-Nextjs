const Algorithm_landingPage = () => {
  return (
    <div className="algorithm_section " id="algorithm">
  <p className=" display-4 mt-4 ">Algorithm</p>
  <p className="text-center lead w-75">
    AutoVision is flexible – use files or capture examples live. It’s respectful{" "}
    <br />
    of the way you work. You can even choose to use it entirely on-device,
    <br /> without any webcam or microphone data leaving your computer
  </p>
  <div className=" algorithm_inner_section ">
    <div className=" algorithm-top d-flex flex-wrap justify-content-center justify-content-around ">
      <div className="algorithm-card ">
        <img src="images/1.png" width="100%" height="250px" />
        <div className="mt-3">
          <h4 className="lead px-2">
            <b>Face Recognition and Detection</b>
          </h4>
          <p className="lead px-2">
            • Eigenfaces <br />
            • Deep Neural Networks (DNN) <br />
            • YOLO Faces <br />
            • Haar Cascade Classifier <br />
            • Convolutional Neural Networks (CNN) <br />
          </p>
        </div>
      </div>
      <div className="algorithm-card ">
        <img src="images/2.png" width="100%" height="250px" />
        <div className="mt-3">
          <h4 className="lead  px-2">
            <b>Human Pose Estimation</b>
          </h4>
          <p className="lead px-2">
            • OpenPose <br />
            • HRNet (High-Resolution Network) <br />
            • AlphaPose <br />
            • CPM (Convolutional Pose Machines) <br />
            • DeepPose <br />
          </p>
        </div>
      </div>
      <div className="algorithm-card ">
        <img src="images/3.jpeg" width="100%" height="250px" />
        <div className=" mt-3">
          <h4 className="lead px-2">
            <b>Object Recognition and Detection</b>
          </h4>
          <p className="lead px-2">
            • Region-based Convolutional Neural Networks (R-CNN)
            <br />
            • Faster R-CNN
            <br />
            • YOLO
            <br />
            • Deep Neural Networks (DNN)
            <br />• Convolutional Neural Networks (CNN)
          </p>
        </div>
      </div>
      <div className="algorithm-card ">
        <img src="images/4.png" width="100%" height="250px" />
        <div className="mt-3">
          <h4 className="lead  px-2">
            <b>Motion Analysis</b>
          </h4>
          <p className="lead px-2">
            • DeepSORT (Simple Online and Realtime Tracking)
            <br />
            • TLD (Tracking-Learning-Detection)
            <br />
            • MOSSE (Minimum Output Sum of Squared Error)
            <br />
            • FlowNet
            <br />
            • Dynamic Time Warping (DTW)
            <br />
          </p>
        </div>
      </div>
      <div className="algorithm-card ">
        <img src="images/5.png" width="100%" height="250px" />
        <div className="mt-3">
          <h4 className="lead  px-2">
            <b>OCR (Optical Character Recognition)</b>
          </h4>
          <p className="lead px-2">
            • Convolutional Neural Networks (CNNs)
            <br />
            • Recurrent Neural Networks (RNNs)
            <br />
            • BERT
            <br />
            • Connectionist Temporal Classification (CTC)
            <br />• Pytesseract
          </p>
        </div>
      </div>
      <div className="algorithm-card ">
        <img src="images/6.jpeg" width={300} height="250px" />
        <div className="mt-3">
          <h4 className="lead  px-2">
            <b>Facial Landmark Detection</b>
          </h4>
          <p className="lead px-2">
            • Convolutive Neural Networks (CNNs)
            <br />
            • Deep Convolutional Neural Networks (DCNNs)
            <br />
            • Face Alignment Networks <br />
            • One-shot Learning and Siamese Networks <br />• 3D Face Landmark
            Detection
          </p>
        </div>
      </div>
    </div>
    {/* Add more algorithm cards as needed */}
  </div>
  <div className="algorithm-Bottom  text-left ">
    <div className="B_PIC">
      <img src="images/gesture.PNG" />
    </div>
    <div className="B_ITEM">
      <h4>
        <b>Real Time Applications</b>
      </h4>
      <p className=" ml-auto lead">
        • Self-driving cars <br />
        • Video surveillance <br />
        • Augmented reality <br />
        • Sports analytics <br />• Quality control
      </p>
      <button className="btn btn-primary btn-sm">
        <a className="nav-link text-white" href="Algorithms.html">
          Get Started With your own Next Big
        </a>
      </button>
    </div>
  </div>
</div>

  )
}

export default Algorithm_landingPage