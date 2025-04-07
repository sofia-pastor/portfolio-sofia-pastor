import ContactCallToAction from "../components/ContactCallToAction";

import profileImg from "../assets/profile-img.png";
import weatherAppImg from "../assets/weather-react-app.png";
import dictionaryImg from "../assets/dictionary-project.png";
import bettingSimulatorImg from "../assets/betting-simulator.png";

import "../styles/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Junior Frontend Developer</h1>
              <h3>Based in Portugal</h3>
            </div>
            <div className="col-md-6">
              <img
                src={profileImg}
                className="profile-img"
                alt="Profile Image"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="about-me-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi! I'm Sofia Pastor, a Junior Front-End Developer based in
            Portugal. Through my training, I have gained hands-on experience in
            HTML, CSS, JavaScript, React, and more. I enjoy solving problems and
            bringing ideas to life through code. I also enjoy creating
            responsive, user-friendly websites and enhancing them with
            interactive, visually engaging features. I love combining creativity
            with technology to craft seamless, dynamic user experiences.
          </p>
          <a href="about.html" className="btn btn-costumize">
            Learn More
          </a>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <p className="">
            Here are a few projects I’ve worked on. Click on any project to
            learn more about the challenges, solutions, and the technologies
            used.
          </p>

          <div className="row align-items-center projects-row">
            <div className="col-md-6">
              <a
                href="https://weather-react-app-sp.netlify.app"
                target="_blank"
              >
                <img
                  src={weatherAppImg}
                  className="img-fluid project-img"
                  alt="Project 1"
                />
              </a>
            </div>
            <div className="col-md-6">
              <h4>Weather App</h4>
              <p>
                A weather app that provides real-time weather data based on user
                input, utilizing both OpenWeather and Unsplash APIs. Users can
                search for a city, view current weather conditions, and see the
                corresponding animated weather icon. The app also features
                dynamic background images based on the searched city.
                <br />
                Built with React and Axios for API integration, and Bootstrap
                for a responsive, clean design, ensuring usability across
                devices.
              </p>
              <a
                href="/projects.html#weather-app"
                className="btn btn-costumize"
              >
                See Details
              </a>
            </div>
          </div>

          <div className="row align-items-center projects-row">
            <div className="col-12 col-md-6 order-1 order-md-0">
              <h4>Dictionary</h4>
              <p>
                A dictionary app that allows users to search for words and view
                their meanings, phonetics, and grammatical forms, powered by a
                dictionary API. The app also fetches and display relevant images
                for the searched word from Unsplash to provide a visual context.
                Built with React for dynamic content rendering, Axios for API
                integration, and Bootstrap for a responsive and user-friendly
                design.
              </p>
              <a
                href="/projects.html#dictionary-app"
                className="btn btn-costumize"
              >
                See Details
              </a>
            </div>
            <div className="col-12 col-md-6 order-0 order-md-1">
              <a href="https://dictionary-app-sp.netlify.app" target="_blank">
                <img
                  src={dictionaryImg}
                  className="img-fluid project-img"
                  alt="Project 3"
                />
              </a>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <a href="https://betting-simulator.netlify.app/" target="_blank">
                <img
                  src={bettingSimulatorImg}
                  className="img-fluid betting-img"
                  alt="Project 2"
                />
              </a>
            </div>
            <div className="col-md-6">
              <h4>Betting Simulator</h4>
              <p>
                A dynamic sports betting simulator where users can place virtual
                bets on real-time UEFA matches using live odds from the Odds
                API. The app includes a fallback to local data in case the API
                request limit is reached, ensuring continuous usability.
                <br />
                Users can simulate bets, manage a virtual wallet with a €50
                top-up limit, and view their active and historical bets. Wallet
                actions include predefined values and custom inputs, all with
                responsive UI feedback.
                <br />
                Built with React and Axios for seamless API integration, and
                structured using modular components with props and hooks to
                ensure clean and maintainable code.
              </p>
              <a
                href="/projects.html#betting-simulator"
                className="btn btn-costumize"
              >
                See Details
              </a>
            </div>
          </div>

          <a
            href="/projects.html"
            className="btn btn-costumize all-projects-btn"
          >
            View All Projects
          </a>
        </div>
      </section>
      <ContactCallToAction />
    </div>
  );
}
