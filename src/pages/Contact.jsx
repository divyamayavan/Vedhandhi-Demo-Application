export default function Contact() {
  return (
    <div className="container py-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
