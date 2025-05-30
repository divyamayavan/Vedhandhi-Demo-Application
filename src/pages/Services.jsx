function Services() {
  const services = [
    "Web Application Development",
    "Mobile Application Development",
    "Testing Service",
    "DevOps",
    "Design Service"
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
