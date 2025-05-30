import React from "react";
import "../App.css";

function Carrer() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0">
        <div
          className="col-md-3 p-0"
          style={{ marginTop: "60px", paddingRight: "20px" }}
        >
          <div className="first-image-wrapper float-effect">
            <img
              src="https://www.vedhanthitechnologies.com/images/others/img1demo5.jpg"
              className="img-fluid w-100 d-block"
              alt="Career Growth Left"
            />
          </div>
        </div>

        <div
          className="col-md-5 d-flex align-items-center"
          style={{ padding: "40px 20px" }} 
        >
          <div className="pbmit-contentbox">
            <div className="pbmit-heading-subheading text-global animation-style2">
              <h2
                className="pbmit-title"
                style={{
                  marginLeft: "-1rem", 
                  fontSize: "130px",
                  fontWeight: 500,
                  lineHeight: "120px",
                  color: "black",
                }}
              >
                Career<br />
                &nbsp;&nbsp;&nbsp;Growth
              </h2>

              <div
                className="pbmit-heading-desc"
                style={{ marginLeft: "2rem" }}
              >
                Unlock your potential with exciting opportunities in a fast-paced industry.
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-md-4 p-0"
          style={{ marginTop: "60px" }}
        >
          <div className="second-image-wrapper float-effect">
            <img
              src="https://www.vedhanthitechnologies.com/images/others/img2demo5.jpg"
              className="img-fluid w-100 d-block"
              alt="Career Growth Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrer;
