import React from "react";
import "./LandingPage.css";

// Import images
import productsImg from "./products.png";
import delivaryImg from "./delivary.jpeg";
import bestDealsImg from "./bestdeals.png";

const LandingPage = () => {
  return (
    <div className="body1">
      <div className="navbar">
        <span className="navbar-brand">Enykart</span>
        <div className="navbar-nav">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Shop
          </a>
          <a className="nav-link" href="#">
            Cart
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
          <a className="nav-link" href="#">
            Login
          </a>
        </div>
      </div>

      <div className="container">
        <div className="he">
          <div className="ani">
            <div className="ani-text">
              <span style={{ "--char-index": 1 }}>W</span>
              <span style={{ "--char-index": 2 }}>e</span>
              <span style={{ "--char-index": 3 }}>l</span>
              <span style={{ "--char-index": 4 }}>c</span>
              <span style={{ "--char-index": 5 }}>o</span>
              <span style={{ "--char-index": 6 }}>m</span>
              <span style={{ "--char-index": 7 }}>e</span>
            </div>
          </div>
          <div className="ani2">
            to <b>Enykart</b> one stop solution for shopping
          </div>
        </div>
        <div className="sub">-Here most of the latest products available</div>
      </div>

      <div className="container">
        <div className="about_us">About Us</div>
        <hr />
        <div className="row">
          <div className="card">
            <img
              src={productsImg}
              className="card-img-top"
              alt="Wide variety of products"
            />
            <div className="card-body">
              <h5 className="card-title">Wide variety of products</h5>
              <p className="card-text">
                We offer a huge number of different products to customers.
                Different varieties of products available here.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={delivaryImg}
              className="card-img-top"
              alt="Super fast delivery"
            />
            <div className="card-body">
              <h5 className="card-title">Super fast delivary</h5>
              <p className="card-text">
                We have best delivary staff to provide best delivary sevices to
                customers.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={bestDealsImg} className="card-img-top" alt="Best deals" />
            <div className="card-body">
              <h5 className="card-title">Best deals</h5>
              <p className="card-text">
                We have best deals for our customers. We offer best deals for
                our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>Customer Reviews</h3>
        <hr />
        <div className="row">
          {/* 1 Star Review */}
          <div>
            <p>1 Star</p>
            <input
              type="range"
              className="rating-input"
              value="2"
              max="5"
              step="1"
              style={{
                background:
                  "linear-gradient(to right, #ff0000 0%, #ff0000 100%)",
              }}
            />
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                style={{ width: "2%" }}
              ></div>
            </div>
          </div>

          {/* 2 Star Review */}
          <div>
            <p>2 Stars</p>
            <input
              type="range"
              className="rating-input"
              value="12"
              max="100"
              step="1"
              style={{
                background:
                  "linear-gradient(to right, #ff7f00 0%, #ff7f00 100%)",
              }}
            />
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "12%" }}
              ></div>
            </div>
          </div>

          {/* 3 Star Review */}
          <div>
            <p>3 Stars</p>
            <input
              type="range"
              className="rating-input"
              value="26"
              max="100"
              step="1"
              style={{
                background:
                  "linear-gradient(to right, #00aaff 0%, #00aaff 100%)",
              }}
            />
            <div className="progress">
              <div
                className="progress-bar bg-info"
                style={{ width: "26%" }}
              ></div>
            </div>
          </div>

          {/* 4 Star Review */}
          <div>
            <p>4 Stars</p>
            <input
              type="range"
              className="rating-input"
              value="57"
              max="100"
              step="1"
              style={{
                background:
                  "linear-gradient(to right, #0080ff 0%, #0080ff 100%)",
              }}
            />
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                style={{ width: "57%" }}
              ></div>
            </div>
          </div>

          {/* 5 Star Review */}
          <div>
            <p>5 Stars</p>
            <input
              type="range"
              className="rating-input"
              value="3"
              max="100"
              step="1"
              style={{
                background:
                  "linear-gradient(to right, #00ff00 0%, #00ff00 100%)",
              }}
            />
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: "3%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Reach Us</h2>
        <hr />
        <div className="c31">
          <div>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-facebook"></a>
          </div>
          <div className="c312">
            <div>enykart@gmail.com</div>
            <div>0891 2755456</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
