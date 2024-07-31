import styles from "./ProjectsStyles.module.css";
import todo from "../../assets/to-do-list-png.jpg";
import weather from "../../assets/weather copy.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo}
          link="https://main.d2wq0b9hyxnidi.amplifyapp.com/"
          h3="To-Do List"
          p="A to-do list app built with React"
        />
        <ProjectCard
          src={weather}
          link="https://main.d19g0sblyqp9ka.amplifyapp.com/"
          h3="Weather App"
          p="A weather app built with React"
        />
      </div>
    </section>
  );
}

export default Projects;
