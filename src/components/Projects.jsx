import Project from "./Project";
import projects from "../public/projects.js";

function Projects() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className="pb-72 bg-[url('src/public/pre-footer-peaks.svg')] bg-bottom bg-cover ">
      <div className="py-16 px-4  mx-auto max-w-screen-xl  sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Check out my work</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            {projects.map((project) => {
              return <Project key={project.title} project={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
