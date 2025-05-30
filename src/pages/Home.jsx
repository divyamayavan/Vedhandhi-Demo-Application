import React, { useEffect, useState } from "react";
import "../App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {


  const titleContent = [
    'Innovate, Transform, and <span>Succeed with Us</span>',
    'Dynamic Digital Solutions <span>for Your Business</span>',
    'Innovative Tech Ideas <span>for the Future</span>',
    'Creative Design Concepts <span>to Inspire</span>',
    'Transforming <span>Ideas into Reality</span>',
    'Optimize Your <span>IT Infrastructure</span>',
  ];

  const paraContent = [
    'Vedhanthi Technologies transforms your ICT needs into strategic advantages, driving growth and efficiency.',
    'Empowering your business with cutting-edge digital solutions.',
    'Revolutionizing the tech landscape with innovative ideas.',
    'Creating inspiring design concepts to elevate your brand.',
    'Integrating seamless solutions for operational excellence.',
    'Providing expert IT services to drive your success.',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titleContent.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section
        className="py-5"
        style={{
          background: `url("https://www.vedhanthitechnologies.com/assets/img/banner/h5_banner_bg.jpg") no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-lg-6 position-relative d-flex flex-column align-items-start gap-4">
              {/* Row 1 - Arrow Image */}
              <div className="arrow-wrapper position-relative" style={{ height: "60px" }}>
                <img
                  src="https://www.vedhanthitechnologies.com/images/horizontal-project/arrow-img-new.png"
                  alt="Arrow"
                  className="d-none d-lg-block arrow-animate"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "-2.5rem",
                    zIndex: 1,
                    width: "300px",
                  }}
                />
              </div>

              {/* Row 2 - Text */}
              <div className="text-content">
                <h2
                  className="fw-bold display-5 mb-3"
                  dangerouslySetInnerHTML={{ __html: titleContent[index] }}
                />
                <p className="fs-5 text-muted">{paraContent[index]}</p>
              </div>

              {/* Row 3 - Circle Button */}
              <div className="circle-button">
                <a
                  href="#about"
                  className="circle-btn d-inline-flex justify-content-center align-items-center text-dark fw-medium"
                >
                  Explore Us <span style={{ marginLeft: "5px" }}>↗</span>
                </a>
              </div>

              {/* Rotating Decoration */}
              <img
                src="https://www.vedhanthitechnologies.com/assets/img/banner/h5_banner_shape01.png"
                alt=""
                className="rotate-animation position-absolute"
                style={{
                  top: "10%",
                  left: "80%",
                  width: "80px",
                }}
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 text-center position-relative mt-5 mt-lg-0">
              {/* Banner image */}
              <img
                src="https://www.vedhanthitechnologies.com/assets/img/banner/h5_banner_img01.png"
                alt="Banner"
                className="img-fluid mb-3"
                style={{ maxWidth: "500px" }}
              />

              {/* Additional overlay image */}
              <img
                src="https://www.vedhanthitechnologies.com/assets/img/banner/h5_banner_img02.png"
                alt=""
                className="position-absolute"
                style={{ top: "20%", left: "10%", width: "200px" }}
              />

              {/* Right side shape */}
              <img
                src="https://www.vedhanthitechnologies.com/assets/img/banner/h5_banner_shape04.png"
                alt="Right Side Shape"
                className="position-absolute d-none d-lg-block"
                style={{
                  top: "10%",
                  right: "-5%",
                  width: "120px",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Banner Image */}
          <div>
            <img
              src="https://www.vedhanthitechnologies.com/assets/img/banner/h5_banner_shape03.png"
              alt="Banner Shape"
              class="oscillate img-fluid"
            />
          </div>


          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            {/* Introduction Text */}
            <div style={{
              padding: '50px',
            }}>
              <div>
                <p className="text-uppercase fw-medium fs-6 lh-base text-secondary mb-2">
                  Our Heritage
                </p>

                <h1 className="fw-bold fs-2 lh-sm text-dark">
                  Crafting Your Vision <br />Into Reality
                </h1>

                <h4
                  className="text-muted"
                  style={{ textAlign: "justify", fontSize: "18px", padding: '10px', marginBottom: '30px' }}
                >
                  VEDHANTHI Technologies, founded in 2022, is a privately held provider of software and web development solutions for information technology, enterprise learning services, IT training, and management professionals.
                </h4>

              </div>

              {/* Mission Sections */}
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <p>01</p>
                  <h1>Mission</h1>
                  <p>
                    User Interface, User Experience,
                    <br />
                    Product Design, Branding &
                    <br />
                    Illustration, Motion Design
                  </p>
                </div>
                <div>
                  <p>02</p>
                  <h1>Vision</h1>
                  <p>
                    Empower clients through innovative tech solutions,
                    <br />
                    ensuring scalability, performance,
                    <br />
                    and user satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Image */}
            <div>
              <img
                src="https://www.vedhanthitechnologies.com/images/digital-studio/demo1-img1.jpg"
                alt="Studio Demo"
                style={{ padding: '50px' }}
              />
            </div>
          </div>

        </div>
      </section>



      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

           
            <div className="col-md-6 position-relative mb-4 mb-md-0">
             
              <img
                src="https://www.vedhanthitechnologies.com/images/about-us-1/img-01.jpg"
                alt="Main"
                className="img-fluid rounded shadow"
              />

        
              <img
                src="https://www.vedhanthitechnologies.com/images/about-us-1/img-02.jpg"
                alt="Overlay"
                className="img-fluid rounded shadow position-absolute"
                style={{
                  width: "50%",
                  bottom: "10%",
                  left: "-20%", 
                  zIndex: 2,
                  margin: "10%",
                }}
              />
            </div>

            
            <div className="col-md-6">
              <p className="text-uppercase fw-semibold mb-2">Who We Are</p>
              <h1 className="fw-bold mb-3">
                We want to bring the business and the digital world together
              </h1>
              <p className="text-muted mb-4">
                We’re a team of strategic digital marketing working globally with the largest brands. We believe that progress only happens when you refuse to play it safe. We combine ideas, behaviors, and insights with design and data to create experiences customers love.
              </p>
              <div className="border-start ps-3">
                <p>Developing a brand requires a great deal of effort in collaboration with strong and reliable development partners.</p>
                <hr />
                <p>Development partners turn your ideas and thoughts into an extraordinary reality that sets you apart from millions of competitors.</p>
                <hr />
                <p>If you're looking for such a solution partner, Vedhanthi Technologies is the ultimate call for excellence!</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section>
        <div class="container py-5">
          <div class="row">


            <div class="col-md-5 mb-4">
              <div class="sticky-top" style={{ top: "100px" }}>
                <div class="mb-4">
                  <h4 class="text-uppercase fw-semibold">Our Expertise</h4>
                  <h2 class="fw-bold">Services We Provide</h2>
                  <p class="text-muted">We are offering the following information's about us that circular that what we actually.</p>
                </div>
                <div>
                  <a
                    href="Contact Us"
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      padding: "0",
                      fontSize: "14px",
                      textAlign: "center",
                      hover: 'lightSeaGrean',
                      marginTop: '20px',
                    }}
                  >
                    Have a Project in yor mind ?
                  </a>
                </div>

              </div>
            </div>


            <div class="col-md-7">

              <div class="mb-4">
                <div class="d-flex align-items-start gap-3">
                  <div><i class="pbmit-digiwize-icon pbmit-digiwize-icon-analytics fs-2 text-primary"></i></div>
                  <div>
                    <h5 class="fw-bold">Branding Design</h5>
                    <p>Effective branding design is the cornerstone of your brand's identity, conveying your unique story and values visually.</p>
                    <span class="badge bg-light text-dark"></span>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex align-items-start gap-3">
                  <div><i class="pbmit-digiwize-icon pbmit-digiwize-icon-web-development fs-2 text-primary"></i></div>
                  <div>
                    <h5 class="fw-bold">Interactive Design</h5>
                    <p>Interactive design combines creativity and functionality, creating engaging user experiences through dynamic visuals and user-friendly interfaces.</p>
                    <span class="badge bg-light text-dark"></span>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex align-items-start gap-3">
                  <div><i class="pbmit-digiwize-icon pbmit-digiwize-icon-customer-behavior fs-2 text-primary"></i></div>
                  <div>
                    <h5 class="fw-bold">Web & Mobile Development</h5>
                    <p>Discover innovative web and mobile solutions tailored to your needs, crafted by our expert developers. Elevate your digital presence today!</p>
                    <span class="badge bg-light text-dark"></span>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex align-items-start gap-3">
                  <div><i class="pbmit-digiwize-icon pbmit-digiwize-icon-statistics fs-2 text-primary"></i></div>
                  <div>
                    <h5 class="fw-bold">Digital Marketing</h5>
                    <p>Digital marketing is the strategic use of online channels to promote products or services, driving growth and engagement.</p>
                    <span class="badge bg-light text-dark"></span>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <div class="d-flex align-items-start gap-3">
                  <div><i class="pbmit-digiwize-icon pbmit-digiwize-icon-content-marketing fs-2 text-primary"></i></div>
                  <div>
                    <h5 class="fw-bold">Testing Service</h5>
                    <p>Discover our comprehensive testing services, ensuring the highest quality and reliability for your products and applications.</p>
                    <span class="badge bg-light text-dark"></span>
                  </div>
                </div>
              </div>

              <div>
                <div class="d-flex align-items-start gap-3">
                  <div><i class="pbmit-digiwize-icon pbmit-digiwize-icon-code-review fs-2 text-primary"></i></div>
                  <div>
                    <h5 class="fw-bold">Illustration Modelling</h5>
                    <p>Illustration modeling combines artistry and technical skill to create stunning visual narratives that captivate and engage audiences.</p>
                    <span class="badge bg-light text-dark"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      
    </>

  );
}

export default Home;

