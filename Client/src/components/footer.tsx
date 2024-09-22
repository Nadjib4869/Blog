export default function footer() {
  return (
    <footer className="bottom-0 h-40 bg-slate-400">
      <div className="container">
        <div className="flex justify-between">
          <div className="col-lg-3 col-md-6">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Our Team</h3>
            <ul>
              <li>
                <a href="#">John Doe</a>
              </li>
              <li>
                <a href="#">Minion</a>
              </li>
              <li>
                <a href="#">Christina</a>
              </li>
              <li>
                <a href="#">Ricky</a>
              </li>
              <li>
                <a href="#">Randy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">
                  Address: 1234 Street Name, City Name, United States
                </a>
              </li>
              <li>
                <a href="#">Phone: +123-456-7890</a>
              </li>
              <li>
                <a href="#">Email: </a>
              </li>
            </ul>
          </div>

          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
