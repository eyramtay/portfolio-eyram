/* eslint-disable react/prop-types */

function ProjectCard({ src, link, h3, p }) {
  return (
    <section>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <br />
      <a href={link} target="_blank">
        {" "}
        <br />
        <button className="hover">Demo</button>
      </a>
    </section>
  );
}

export default ProjectCard;
