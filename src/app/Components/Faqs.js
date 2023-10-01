const Faqs = () => {
  return (
    
    <>
     <section className="faqs bg-light" id="FAQs">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {/* FAQ Item 1 */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is computer vision?
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Computer vision is a field of artificial intelligence that
                focuses on enabling computers to interpret and understand visual
                information from images or videos.
              </div>
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Why is face recognition important?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Face recognition has numerous applications, such as biometric
                identification, surveillance systems, and access control, which
                enhance security and convenience.
              </div>
            </div>
          </div>
          {/* FAQ Item 3 */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is object detection and recognition?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Object detection and recognition involve identifying and
                localizing specific objects within an image or video, enabling
                machines to understand their surroundings and interact with
                them.
              </div>
            </div>
          </div>
          {/* FAQ Item 4 */}
          <div className="card">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How does image classification work?
                </button>
              </h5>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Image classification is the process of categorizing images into
                predefined classes or labels, usually using machine learning
                algorithms trained on labeled datasets.
              </div>
            </div>
          </div>
          {/* FAQ Item 5 */}
          <div className="card">
            <div className="card-header" id="headingFive">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  What is image segmentation?
                </button>
              </h5>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Image segmentation involves partitioning an image into distinct
                regions or objects of interest, enabling more detailed analysis
                and understanding of the image content.
              </div>
            </div>
          </div>
          {/* FAQ Item 6 */}
          <div className="card">
            <div className="card-header" id="headingSix">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Can I use my own algorithms and datasets?
                </button>
              </h5>
            </div>
            <div
              id="collapseSix"
              className="collapse"
              aria-labelledby="headingSix"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Yes, the website allows users to select and implement their own
                algorithms and datasets, providing flexibility and customization
                options.
              </div>
            </div>
          </div>
          {/* FAQ Item 7 */}
          <div className="card">
            <div className="card-header" id="headingSeven">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  How are the recommended algorithms and datasets selected?
                </button>
              </h5>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              aria-labelledby="headingSeven"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                The recommended algorithms and datasets are chosen based on
                their performance, popularity, and relevance to the specific
                computer vision tasks.
              </div>
            </div>
          </div>
          {/* FAQ Item 8 */}
          <div className="card">
            <div className="card-header" id="headingEight">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Is the website suitable for beginners in computer vision?
                </button>
              </h5>
            </div>
            <div
              id="collapseEight"
              className="collapse"
              aria-labelledby="headingEight"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Absolutely! The website is designed to be accessible to users
                with varying levels of experience, offering a simple and
                intuitive user interface and clear documentation.
              </div>
            </div>
          </div>
          {/* FAQ Item 9 */}
          <div className="card">
            <div className="card-header" id="headingNine">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  How can I share my results with others?
                </button>
              </h5>
            </div>
            <div
              id="collapseNine"
              className="collapse"
              aria-labelledby="headingNine"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                You can share your results with others through a dedicated forum
                or social media platform provided on the website, allowing for
                knowledge sharing and collaboration.
              </div>
            </div>
          </div>
          {/* FAQ Item 10 */}
          <div className="card">
            <div className="card-header" id="headingTen">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  How often is the website updated?
                </button>
              </h5>
            </div>
            <div
              id="collapseTen"
              className="collapse"
              aria-labelledby="headingTen"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                The website is regularly updated with new algorithms and
                datasets to ensure users have access to the latest advancements
                and resources in computer vision.
              </div>
            </div>
          </div>
          {/* FAQ Item 11 */}
          <div className="card">
            <div className="card-header" id="headingEleven">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  What are the benefits of this project?
                </button>
              </h5>
            </div>
            <div
              id="collapseEleven"
              className="collapse"
              aria-labelledby="headingEleven"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                - Increased accessibility to computer vision for a wider range
                of users. - A platform for knowledge sharing and collaboration
                among users. - Advancement of the computer vision field by
                providing a central repository of algorithms and datasets. - Can
                I contribute my own algorithms and datasets to the website? Yes,
                the website encourages user contributions, allowing you to share
                your own algorithms and datasets with the community.
              </div>
            </div>
          </div>
          {/* FAQ Item 12 */}
          <div className="card">
            <div className="card-header" id="headingTwelve">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  Are there any costs associated with using the website?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwelve"
              className="collapse"
              aria-labelledby="headingTwelve"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                The website's basic functionalities are typically available for
                free, but there might be premium features or subscriptions
                available for additional benefits.
              </div>
            </div>
          </div>
          {/* FAQ Item 13 */}
          <div className="card">
            <div className="card-header" id="headingThirteen">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThirteen"
                  aria-expanded="false"
                  aria-controls="collapseThirteen"
                >
                  Can I use the website for commercial projects?
                </button>
              </h5>
            </div>
            <div
              id="collapseThirteen"
              className="collapse"
              aria-labelledby="headingThirteen"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Depending on the terms and conditions of the website, it is
                possible to use the provided algorithms and datasets for
                commercial projects. However, it's recommended to review the
                licensing and usage guidelines.
              </div>
            </div>
          </div>
          {/* FAQ Item 14 */}
          <div className="card">
            <div className="card-header" id="headingFourteen">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFourteen"
                  aria-expanded="false"
                  aria-controls="collapseFourteen"
                >
                  Is the website suitable for both research and practical
                  applications?
                </button>
              </h5>
            </div>
            <div
              id="collapseFourteen"
              className="collapse"
              aria-labelledby="headingFourteen"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Yes, the website caters to both research-oriented users and
                those seeking practical applications, providing a comprehensive
                resource for computer vision tasks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Faqs
