function Project({ project }) {
  return (
    <div className="group block relative text-gray-900 ">
      <span className="absolute inset-0 bg-black  rounded-xl translate-x-1 translate-y-1"></span>
      <div className="flex flex-col gap-y-2 relative  py-2 px-5 space-x-2 h-full bg-white  rounded-xl border-2 border-black">
        <project.Icon size="4em" className="text-rose-200" />
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="font-mono text-gray-700 ">{project.description}</p>
        <a
          className="text-rose-500 hover:text-rose-300 font-bold  "
          href={project.url}
          rel="_noreferrer"
          target="blank"
        >
          View live project ⮕
        </a>
      </div>
    </div>
  );
}

export default Project;
