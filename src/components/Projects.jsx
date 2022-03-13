import Project from "./Project";
import projects from "../public/projects.js";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";

function Projects() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section
      className="pb-16 bg-[url('src/public/pre-footer-peaks.svg')] bg-bottom bg-cover "
      id="projects"
    >
      <div className="py-16 mx-auto max-w-screen-xl  px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold pb-8">My work</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            {projects.map((project) => {
              return <Project key={project.title} project={project} />;
            })}
          </div>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <Button />
            <SecondaryButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
