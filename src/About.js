import logo from './logo.svg';
//import './App.css';
import './bootstrap.css';
import './style.css';
import Services1 from './services1.svg';
import Service2 from './services2.svg';
import Service3 from './services3.svg';
import Service4 from './services4.svg';

function About() {
  return (
    <section className="our-services  section-padding40">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8">

						<div className="section-tittle mb-80">
							<h2>My Experties</h2>
						</div>
					</div>
				</div>
				<div className="row no-gutters">
					<div className=" col-lg-6 col-md-6 col-sm-6">
						<div className="single-services">
							<div className="services-ion">
								<img src={Services1} alt="" />
							</div>
							<div className="services-cap">
								<h5><a href="#">Strategy &amp; Direction</a></h5>
								<p>Understand First. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="browse-btn">Head of design at Calvino</a>
							</div>
						</div>
					</div>
					<div className=" col-lg-6 col-md-6 col-sm-6">
						<div className="single-services">
							<div className="services-ion">
								<img src={Service2} alt="" />
							</div>
							<div className="services-cap">
								<h5><a href="#">Strategy &amp; Direction</a></h5>
								<p>Understand First. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="browse-btn">Head of design at Calvino</a>
							</div>
						</div>
					</div>
					<div className=" col-lg-6 col-md-6 col-sm-6">
						<div className="single-services">
							<div className="services-ion">
								<img src={Service3} alt="" />
							</div>
							<div className="services-cap">
								<h5><a href="#">Strategy &amp; Direction</a></h5>
								<p>Understand First. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="browse-btn">Head of design at Calvino</a>
							</div>
						</div>
					</div>
					<div className=" col-lg-6 col-md-6 col-sm-6">
						<div className="single-services">
							<div className="services-ion">
								<img src={Service4} alt="" />
							</div>
							<div className="services-cap">
								<h5><a href="#">Strategy &amp; Direction</a></h5>
								<p>Understand First. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="browse-btn">Head of design at Calvino</a>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</section>
  );
}

export default About;