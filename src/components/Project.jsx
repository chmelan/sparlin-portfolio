function Project({ project }) {
  return (
    <div className="group block relative text-black ">
      <span className="absolute inset-0 bg-black  rounded-xl translate-x-1 translate-y-1"></span>
      <div className="flex relative items-end py-2 px-5 space-x-2 h-full bg-white  rounded-xl border-2 border-black">
        <project.Icon size="4em" />
        <h3>{project.title}</h3>
        <p className="">{project.description}</p>
        <a href={project.url} rel="_noreferrer" target="blank">
          View live project
        </a>
      </div>
    </div>
  );
}

export default Project;
