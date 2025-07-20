import React from "react";
import {Fade} from "react-reveal";
import PersonalProjectCard from "../../components/PersonalProjectCard";
import {personalProjects} from "../../portfolio";
import "./PersonalProjects.scss";

export default function PersonalProjectsSection() {
  if (!personalProjects.display) return null;

  return (
    <div className="main" id="personal-projects">
      <div className="personal-projects-header">
        <h1 className="heading">{personalProjects.title}</h1>
        <p className="subTitle">{personalProjects.subtitle}</p>
      </div>
      <div className="projects-container">
        {personalProjects.projects.map((project, index) => (
          <Fade bottom duration={1000} distance="40px" key={index}>
            <PersonalProjectCard
              projectName={project.projectName}
              projectDesc={project.projectDesc}
              image={project.image}
              footerLinks={project.footerLink}
            />
          </Fade>
        ))}
      </div>
    </div>
  );
}
