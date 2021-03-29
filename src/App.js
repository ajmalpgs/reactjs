import logo from './logo.svg';
//import './App.css';
import './bootstrap.css';
import './style.css';
import EmployeeImg from './kiran.jpg';

function App() {
  return (
    
      <div className="slider-area position-relative">
      <div className="single-slider slider-height d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-4">
              <div className="employee">
                 <img src={EmployeeImg}  alt="" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-7 col-sm-8">
              <div className="hero__caption">
                <h1>My name is Kiran.</h1>
                <p>Head of Quality Analyst Web solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-info ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-3 col-sm-3">
              <div className="about-info-single">
                <p>Quality Analyst For</p>
                <span>Web &amp; Mobile</span>
              </div>
            </div>
            <div className="col-lg-7 col-md-9 col-sm-9">
              <div className="about-info-wrapper d-flex justify-content-between flex-wrap">
                <div className="about-info-single text-right">
                  <p>Phone</p>
                  <span><a href="tel:+971544566845">+ 971 544566845</a></span>
                </div>
                <div className="about-info-single text-right d-flex align-items-center">
                  <div className="about-info-single mr-5">
                    <p>Drop your Message</p>
                    <a href="mailto:ktkd86@gmail.com">ktkd86@gmail.com</a>
                  </div>
                  <div className="icon">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default App;
