import React from "react";
import "./PersonalProjectCard.scss";

const PersonalProjectCard = ({
  projectName,
  projectDesc,
  image,
  footerLinks
}) => {
  return (
    <div className="personal-project-card">
      <div className="card-image">
        <img src={image} alt={projectName} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{projectName}</h3>
        <p className="card-description">{projectDesc}</p>
        <div className="card-links">
          {footerLinks &&
            footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectCard;
