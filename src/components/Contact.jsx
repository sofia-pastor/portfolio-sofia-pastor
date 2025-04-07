import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let’s Collaborate</h2>
      <h5>
        Have a question, proposal, or an idea you'd like to collaborate on? Feel
        free to reach out — I’d love to hear from you!
      </h5>
      <div className="mail">
        <a href="mailto:sofiapastor93@gmail.com">sofiapastor93@gmail.com</a>
      </div>
      <div className="row text-center mt-4">
        <div className="col-4">
          <h6>
            <a href="mailto:sofiapastor93@gmail.com" title="E-mail">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </a>
          </h6>
        </div>
        <div className="col-4">
          <h6>
            <a
              href="https://github.com/sofia-pastor?tab=repositories"
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
            >
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            </a>
          </h6>
        </div>
        <div className="col-4">
          <h6>
            <a
              href="https://www.linkedin.com/in/sofia-pastor-freitas/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}
