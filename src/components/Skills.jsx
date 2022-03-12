function Skills({ heading, skills }) {
  return (
    <div className=" pb-4 ">
      <h3 className="pb-2 font-mono tracking-wider text-white">{heading}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="group block relative text-black ">
              <span className="absolute inset-0 bg-black  rounded-xl translate-x-1 translate-y-1"></span>
              <div
                key={skill.name}
                className="flex relative items-end py-2 px-5 space-x-2 h-full bg-white hover:bg-green-100 rounded-xl border-2 border-black transition ease-in-out hover:translate-x-1 hover:translate-y-1	"
              >
                <skill.Icon size="1.5em" />
                <p className="">{skill.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
