const Tasks = () => {
  return (
    <>
  <div className="card-container">
    <div className="card">
      <div className="card-header"></div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <p className=" " style={{ color: "black", fontSize: 25 }}>
                  Face Recognition and Detection
                </p>
              </h5>
              <p className="card-text">
                <img
                  src="images/1.png"
                  alt=""
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                  width={250}
                  height={200}
                />
              </p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#faceDetectionModal"
              >
                Start the Face Recognition and Detection Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <p className=" " style={{ color: "black", fontSize: 25 }}>
                  Human Pose Estimation
                </p>
              </h5>
              <p className="card-text">
                <img
                  src="images/2.png"
                  alt=""
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                  width={250}
                  height={200}
                />
              </p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#faceRecognitionModal"
              >
                Start the Human Pose Estimation Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <p className=" " style={{ color: "black", fontSize: 25 }}>
                  Object Recognition and Detection
                </p>
              </h5>
              <p className="card-text">
                <img
                  src="images/3.jpeg"
                  alt=""
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                  width={250}
                  height={200}
                />
              </p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#objectRecognitionModal"
              >
                Start the Object Recognition and Detection Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <p className=" " style={{ color: "black", fontSize: 25 }}>
                  Motion Analysis
                </p>
              </h5>
              <p className="card-text">
                <img
                  src="images/4.png"
                  alt=""
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                  width={250}
                  height={200}
                />
              </p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#objectDetectionModal"
              >
                Start the Motion Analysis Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <p className="" style={{ color: "black", fontSize: 25 }}>
                  OCR (Optical Character Recognition)
                </p>
              </h5>
              <p className="card-text">
                <img
                  src="images/5.png"
                  alt=""
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                  width={250}
                  height={200}
                />
              </p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#imageClassificationModal"
              >
                Start the OCR (Optical Character Recognition) Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <p className="" style={{ color: "black", fontSize: 25 }}>
                  Facial Landmark Detection
                </p>
              </h5>
              <p className="card-text">
                <img
                  src="images/6.jpeg"
                  alt=""
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%"
                  }}
                  width={250}
                  height={200}
                />
              </p>
              <a
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#imageSegmentationModal"
              >
                Start the Facial Landmark Detection Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Face Detection Modal */}
  <div
    className="modal fade"
    id="faceDetectionModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="faceDetectionModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="faceDetectionModalLabel">
            Face Detection and Recognition
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
          <p className=" " style={{ color: "black", fontSize: 20 }}>
            <b>Face Detection and Recognition</b>
          </p>
          <p
            className="text-dark lead"
            style={{
              fontFamily:
                '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
              fontSize: 15
            }}
          >
            Detection is the process of finding a face in an image while facial
            recognition can detect and identify individual faces from an image
            containing one or many people's faces.
          </p>
          <div className="list-group">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15 }}
            >
              Recomended Algorithms{" "}
            </h1>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Eigenface
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Deep Neural Networks (DNN)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                YOLO Faces
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Haar Cascade Classifier
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Convolutional Neural Networks (CNN)
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            {" "}
            <a
              href="Algorithms-Implementation/Face-Detection.html"
              style={{ color: "white" }}
            >
              Start Project
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Face Recognition Modal */}
  <div
    className="modal fade"
    id="faceRecognitionModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="faceRecognitionModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="faceRecognitionModalLabel">
            Human Pose Estimation
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
          <p className=" " style={{ color: "black", fontSize: 20 }}>
            <b>Human Pose Estimation</b>
          </p>
          <p
            className="text-dark lead"
            style={{
              fontFamily:
                '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
              fontSize: 15
            }}
          >
            Human pose estimation focuses on detecting and estimating the pose
            (position and orientation) of human body parts in images or videos.
          </p>
          <div className="list-group">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15 }}
            >
              Recomended Algorithms{" "}
            </h1>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                OpenPose
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                HRNet (High-Resolution Network)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                AlphaPose
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                CPM (Convolutional Pose Machines)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                DeePose
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <h1
            className="list-group-item list-group-item-action active"
            aria-current="true"
            style={{ fontSize: 15, textAlign: "center" }}
          >
            Coming Soon{" "}
          </h1>
        </div>
      </div>
    </div>
  </div>
  {/* Object Recognition Modal */}
  <div
    className="modal fade"
    id="objectRecognitionModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="objectRecognitionModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="objectRecognitionModalLabel">
            Object Recognition and Detection
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
          <p className=" " style={{ color: "black", fontSize: 20 }}>
            <b>Object Recognition and Detection</b>
          </p>
          <p
            className="text-dark lead"
            style={{
              fontFamily:
                '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
              fontSize: 15
            }}
          >
            Object recognition determines which objects are present in an image.
            Object detection is the process of finding instances of objects in
            images.
          </p>
          <div className="list-group">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15 }}
            >
              Recomended Algorithms{" "}
            </h1>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Region-based Convolutional Neural
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Faster R-CNN
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                YOLO
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Deep Neural Networks (DNN)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Convolutional Neural Networks (CNN)
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            {" "}
            <a
              href="Algorithms-Implementation/Face-Detection.html"
              style={{ color: "white" }}
            >
              Start Project
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Object Detection Modal */}
  <div
    className="modal fade"
    id="objectDetectionModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="objectDetectionModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="objectDetectionModalLabel">
            Motion Analysis
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
          <p className=" " style={{ color: "black", fontSize: 25 }}>
            <b>Motion Analysis</b>
          </p>
          <p
            className="text-dark lead"
            style={{
              fontFamily:
                '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
              fontSize: 15
            }}
          >
            Motion analysis involves detecting and understanding the motion of
            objects or camera movements in videos.
          </p>
          <div className="list-group">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15 }}
            >
              Recomended Algorithms{" "}
            </h1>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                DeepSORT (Simple Online and Realtime Tracking)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                TLD (Tracking-Learning-Detection)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                MOSSE (Minimum Output Sum of Squared Error)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                FlowNet
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Dynamic Time Warping (DTW)
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <h1
            className="list-group-item list-group-item-action active"
            aria-current="true"
            style={{ fontSize: 15, textAlign: "center" }}
          >
            Coming Soon{" "}
          </h1>
        </div>
      </div>
    </div>
  </div>
  {/* Image Classification Modal */}
  <div
    className="modal fade"
    id="imageClassificationModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="imageClassificationModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="imageClassificationModalLabel">
            OCR (Optical Character Recognition)
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
          <p className=" " style={{ color: "black", fontSize: 20 }}>
            <b>OCR (Optical Character Recognition)</b>
          </p>
          <p
            className="text-dark lead"
            style={{
              fontFamily:
                '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
              fontSize: 15
            }}
          >
            The process that converts an image of text into a machine-readable
            text format.
          </p>
          <div className="list-group">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15 }}
            >
              Recomended Algorithms{" "}
            </h1>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Convolutive Neural Networks (CNNs)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Recurrent Neural Networks (RNNs)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                BERT, GPT-3
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Connectionist Temporal Classification (CTC)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Support Vector Machines (SVMs)
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              {" "}
              <a
                href="Algorithms-Implementation/Face-Detection.html"
                style={{ color: "white" }}
              >
                Start Project
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Image Segmentation Modal */}
  <div
    className="modal fade"
    id="imageSegmentationModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="imageSegmentationModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="imageSegmentationModalLabel">
            Facial Landmark Detection
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
          <p className=" " style={{ color: "black", fontSize: 25 }}>
            <b>Facial Landmark Detection</b>
          </p>
          <p
            className="text-dark lead"
            style={{
              fontFamily:
                '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif',
              fontSize: 15
            }}
          >
            To scan digital images or real-life scenarios to locate instances of
            every object, separate them, and analyze their necessary features
            for real-time predictions.
          </p>
          <div className="list-group">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15 }}
            >
              Recomended Algorithms{" "}
            </h1>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Convolutive Neural Networks (CNNs)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Deep Convolutional Neural Networks (DCNNs)
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Face Alignment Networks
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                One-shot Learning and Siamese Networks
              </label>
            </div>
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                3D Face Landmark Detection
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <h1
              className="list-group-item list-group-item-action active"
              aria-current="true"
              style={{ fontSize: 15, textAlign: "center" }}
            >
              Coming Soon{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</>

  )
}

export default Tasks