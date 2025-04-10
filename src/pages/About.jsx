import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Contact from "../components/Contact";
import SkillsSection from "../components/SkillsSection";

import "../styles/About.css";
import profilePhoto from "../assets/profile-img-2.png";

export default function About() {
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
    <div className="About">
      <section className="about-me" id="about-me">
        <div className="container">
          <h1>About Me</h1>
          <div className="bio">
            <div className="row align-items-center g-4 justify-content-center">
              <div className="col-lg-6">
                <h2>Bio</h2>
                <p>
                  Hello! I’m Sofia Pastor, a Junior Front-End Developer based in
                  Portugal, passionate about building accessible, user-friendly,
                  and visually engaging web experiences.
                </p>
                <p>
                  My journey into development began with a deep curiosity about
                  how digital experiences work — and quickly evolved into a
                  genuine passion for creating them. I thrive on solving
                  problems and love approaching challenges from different
                  perspectives to uncover creative, precise, and effective
                  solutions.
                </p>{" "}
                <p>
                  I’ve completed intensive training in HTML, CSS, JavaScript,
                  and React, and have built real-world projects that reflect
                  both my technical skills and attention to user experience.
                  From responsive layouts to real-time API integrations, I enjoy
                  turning logic into interaction and code into clarity.
                </p>
                <p>
                  I’m especially drawn to UX and intuitive design, aiming to
                  build interfaces that not only function well but also feel
                  effortless to use. Whether through subtle transitions or
                  dynamic feedback, I believe great experiences lie in the
                  details.{" "}
                </p>
                <p>
                  Currently, I’m open to new opportunities and collaborations —
                  especially remote or hybrid — where I can continue to grow,
                  contribute, and build meaningful digital products.
                </p>
                <p>Let’s connect and create something impactful together!</p>
                <br />{" "}
                <p>
                  You can also take a look at{" "}
                  <a
                    href="/cv-sofia-pastor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-link"
                  >
                    my CV here
                  </a>
                  .
                </p>
              </div>
              <div className="col-lg-6">
                <img src={profilePhoto} className="profile-img" alt="Profile" />
              </div>
            </div>
          </div>

          <h2 className="skills-heading">Core Skills</h2>
          <p className="skills-intro">
            Here are some of the tools and technologies I use to bring ideas to
            life:
          </p>
          <SkillsSection />
          <div className="line"></div>

          <Contact />

          <div className="line"></div>
        </div>
      </section>
    </div>
  );
}
