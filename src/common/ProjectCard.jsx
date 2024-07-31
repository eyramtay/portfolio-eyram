import React from "react";

function ProjectCard({ src, link, h3, p }) {
  return (
    <section>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <a href={link} target="_blank">
        <button className="hover">Demo</button>
      </a>
    </section>
  );
}

export default ProjectCard;
