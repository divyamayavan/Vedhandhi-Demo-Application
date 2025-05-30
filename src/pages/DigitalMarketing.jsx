import React from "react";
import '../App.css';

function DigitalMarketing() {
  return (
    <section className="digital-marketing-welcome" id="main-header1">
      <div className="digital-marketing-welcome-inner">
        <div className="container">
          {/* Background Video */}
          <div className="digital-marketing-bg-video">
            <iframe
              className="background-video-embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Planet Earth In Close Up View"
              src="https://www.youtube-nocookie.com/embed/yHGbt9qDdTM?controls=0&t=31s&loop=1&playlist=yHGbt9qDdTM&autoplay=1&mute=1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Underlined Heading */}
          <div className="pbmit-special-heading active">
            <h1 className="big-title" style={{ textAlign: "center" }}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontSize: "130px",
                  borderBottom: "10px solid white",
                  paddingBottom: "10px",
                  color: "white",
                  lineHeight: "1",
                  fontWeight: "bold",
                  marginTop: "250px",
                }}
              >
                Digital Marketing
              </div>
            </h1>


          </div>

          {/* Metrics and Info Boxes */}
          <div className="row" style={{ color: "white" }}>
            <div className="col-md-4">
              <div className="pbminfotech-ele-fid-style-14">
                <div className="pbmit-fld-contents">
                  <div className="pbmit-fld-wrap d-flex align-items-center">
                    <h4 className="pbmit-fid-inner d-flex align-items-center">
                      <span className="pbmit-fid-before"></span>
                      <span
                        className="pbmit-number-rotate numinate completed"
                        data-appear-animation="animateDigits"
                        data-from="0"
                        data-to="250"
                        data-interval="1"
                      >
                        250
                      </span>
                      <span className="pbmit-fid">
                        <span>+</span>
                      </span>
                    </h4>
                    <h3
                      className="pbmit-fid-title"
                      style={{ fontSize: "1.25rem", color: "white" }}
                    >
                      Projects completed
                      <br /> successfully
                    </h3>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="pbmit-down-aerrow-animation">
                <a className="elementor-icon" href="#digAbout">
                  Scroll
                  <i
                    className="pbmit-base-icon-left-arrow-2"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pbmit-ihbox-style-18">
                <div className="pbmit-ihbox-headingicon d-flex">
                  <div className="pbmit-ihbox-icon">
                    <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                      <img
                        src="https://www.vedhanthitechnologies.com/images/icon-img-02.png"
                        className="rotate-image"
                        alt="Rotating Icon"
                      />
                    </div>

                  </div>
                  <div className="pbmit-ihbox-contents">
                    <h2 className="pbmit-element-title">
                      We Work to Give Customers
                      <br />
                      <span> Unique </span> Experience
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalMarketing;
