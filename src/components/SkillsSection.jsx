import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faCogs,
  faCloud,
  faGlobe,
  faChartLine,
  faTerminal,
  faDatabase,
  faCloudUploadAlt,
  faBoxOpen,
  faCodeBranch,
  faRobot,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function SkillsSection() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <ul className="skills-list">
            <li>
              <FontAwesomeIcon icon={faHtml5} /> HTML5 & CSS3
            </li>
            <li>
              <FontAwesomeIcon icon={faJsSquare} /> JavaScript (ES6+)
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} /> Frameworks & Libraries:
              <ul className="skills-list sublist">
                <li>
                  <FontAwesomeIcon icon={faReact} /> React (hooks, props)
                </li>
                <li>
                  <FontAwesomeIcon icon={faRoad} /> React Router
                </li>
                <li>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendarAlt} /> Moment.js &
                  Typewriter.js (via CDN)
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <ul className="skills-list skills-list-2">
            <li>
              <FontAwesomeIcon icon={faCloud} /> API Integration (RESTful APIs,
              JSON)
            </li>
            <li>
              <FontAwesomeIcon icon={faCogs} /> Axios for API Integration
            </li>
            <li>
              <FontAwesomeIcon icon={faBoxOpen} /> Package Management (npm)
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} /> SEO Fundamentals
            </li>
            <li>
              <FontAwesomeIcon icon={faLaptopCode} /> Responsive Web Design
            </li>
            <li>
              <FontAwesomeIcon icon={faCodeBranch} /> Git & GitHub
            </li>
            <li>
              <FontAwesomeIcon icon={faCloudUploadAlt} /> Deployment (e.g.
              Netlify)
            </li>
          </ul>
        </div>
      </div>

      <p className="python-skills-intro">Additional Backend Knowledge:</p>
      <ul className="skills-list small-list">
        <li>
          <FontAwesomeIcon icon={faPython} /> Python (OOP, data manipulation)
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} /> CSV handling & data parsing
        </li>
        <li>
          <FontAwesomeIcon icon={faChartLine} /> Data Visualization (Matplotlib)
        </li>
      </ul>
      <ul className="skills-list small-list">
        <li>
          <FontAwesomeIcon icon={faRobot} /> AI API Integration
        </li>
        <li>
          <FontAwesomeIcon icon={faTerminal} /> Libraries: Rich (console output)
          | csv module (parsing)
        </li>
      </ul>
    </>
  );
}
