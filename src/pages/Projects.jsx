import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import getProjectsData from "../components/ProjectsData";
import ContactCallToAction from "../components/ContactCallToAction";

import "../styles/Projects.css";

export default function Projects() {
  const projectsData = getProjectsData();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div className="Projects">
      <div className="container ">
        <section className="header" id="projects">
          <h1>Featured Projects</h1>
          <p>
            Explore a collection of my featured work, showcasing diverse skills
            in front-end development. These projects reflect my dedication to
            building functional, visually engaging, and user-friendly web
            applications. From weather apps to interactive surfboard selectors,
            each project highlights my passion for problem-solving and my
            ability to create seamless user experiences. Dive in to see
            creativity and code in action!
          </p>
        </section>
        <section className="projects">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projectsData.map((project) => (
              <div className="col" key={project.id} id={project.anchorId}>
                <div className="card h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.alt}
                  />
                  <div className="card-body ">
                    <h4 className="card-title">{project.title}</h4>
                    {project.description.map((paragraph, index) => (
                      <p className="card-text" key={index}>
                        {paragraph}
                      </p>
                    ))}{" "}
                    <p className="tech">
                      Technologies:{" "}
                      <span className="fw-normal">{project.technologies}</span>
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <a
                      href={project.launchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn"
                    >
                      Launch App
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="col d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h5>Check out other projects!</h5>
                <a
                  href="https://github.com/sofia-pastor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        <ContactCallToAction />
      </div>{" "}
    </div>
  );
}
