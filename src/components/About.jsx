import { FaPython, FaDatabase } from "react-icons/fa";
import {
  SiAdobecreativecloud,
  SiMicrosoftexcel,
  SiNumpy,
  SiPandas,
  SiMicrosoftpowerpoint,
  SiRstudio,
  SiSqlite,
  SiTableau,
} from "react-icons/si";
import Skills from "./Skills";

const languageSkills = [
  {
    name: "Python",
    Icon: FaPython,
  },
  {
    name: "R Studio",
    Icon: SiRstudio,
  },
];

const librarySkills = [
  {
    name: "Tidyverse",
    Icon: SiRstudio,
  },
  {
    name: "NumPy",
    Icon: SiNumpy,
  },
  {
    name: "Pandas",
    Icon: SiPandas,
  },
  {
    name: "MatPlotLib",
    Icon: FaPython,
  },
];

const dbSkills = [
  {
    name: "SQL",
    Icon: FaDatabase,
  },
  {
    name: "SQLite",
    Icon: SiSqlite,
  },
];

const visualizationSkills = [
  {
    name: "Tableau",
    Icon: SiTableau,
  },
  {
    name: "Excel",
    Icon: SiMicrosoftexcel,
  },
  {
    name: "Powerpoint",
    Icon: SiMicrosoftpowerpoint,
  },
  {
    name: "Adobe Creative Suite",
    Icon: SiAdobecreativecloud,
  },
];

function About() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section
      className="flex justify-center items-center min-h-screen text-white  bg-rose-600 bg-[url('src/public/Website_Pattern_High_Quality-01.png')]	"
      id="about"
    >
      <div className="py-16 md:py-32 px-4 w-full max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <div className="mx-auto max-w-lg lg:mx-0 text-left md:text-center">
            <h2 className="text-3xl md:text-4xl ">
              There is a{" "}
              <span className="underline decoration-rose-300">magical</span>{" "}
              place between data and design
            </h2>

            <p className="mt-4 font-mono text-white ">
              I&apos;ve been a for-hire graphic designer and social media
              consultant but decided to steer my career path in a different
              direction in 2021 (because living with a global pandemic
              wasn&apos;t enough for me, apparently). Now, my efforts are
              focused on data analysis and I am working hard to hone my
              technical and analytics skills each and every day. There&apos;s a
              lot that I am still learning, and I hope that never changes.
            </p>
            <p className="my-4 font-mono text-white ">
              In my free time (what&apos;s that again?), you can find me
              neck-deep in a book, grumbling my way through the NYTimes daily
              crossword, slaying beasts with my Dungeons &amp; Dragons party,
              or, quite honestly, having a good snooze with the best boy to ever
              exist.
            </p>
          </div>
          <div>
            <Skills heading="Languages" skills={languageSkills} />
            <Skills heading="Libraries" skills={librarySkills} />
            <Skills heading="Databases" skills={dbSkills} />
            <Skills heading="Visualization" skills={visualizationSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
