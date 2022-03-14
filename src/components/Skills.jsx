import { useState } from "react";
import keyboardClick from "../public/keyboard-click.mp3";
function Skills({ heading, skills }) {
  return (
    <div className=" pb-4 ">
      <h3 className="pb-2 font-mono tracking-wider text-white">{heading}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const [isActive, setActive] = useState(false);

          const handleClick = () => {
            const click = new Audio(keyboardClick);
            click.play();
            setActive(isActive ? false : true);
          };
          return (
            <button
              key={skill.name}
              className="group block relative text-black "
              onClick={() => handleClick()}
            >
              <span className="absolute inset-0 bg-black  rounded-xl translate-x-1 translate-y-1"></span>
              <div
                key={skill.name}
                className={
                  "flex relative items-end py-2 px-5 space-x-2 h-full   rounded-xl border-2 border-black transition ease-in-out hover:translate-x-1 hover:translate-y-1 " +
                  (isActive ? "bg-neutral-700 text-white" : "bg-white")
                }
              >
                <skill.Icon size="1.5em" />
                <p className="">{skill.name}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
