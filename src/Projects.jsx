import useFetchProjects from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  console.log(isLoading, projects);

  if (isLoading) {
    return (
      <section className="projects">
        <h2>Loading</h2>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>

        <div className="projects-center">
          {projects.map((project) => {
            const { title, url, img, id } = project;

            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={img} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;