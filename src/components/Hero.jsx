import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
import illustration from "../public/Website_Illustration_HQ-01.png";

function Hero() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className="relative ">
      <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:flex lg:items-center min-h-screen">
        <div className="max-w-xl  text-left">
          <h1 className=" text-3xl md:text-5xl font-semibold leading-tight ">
            I&apos;m a Graphic Designer turned
            <span className="text-rose-700  "> Data Analyst </span>
            who&apos;s learning to get a little better every day.
          </h1>

          <p className="mt-4 max-w-lg font-mono text-neutral-700 text-lg ">
            I use Python, R, and Tableau to discover the stories hidden within
            data.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center ">
            <Button content="View projects" link="#projects" />
            <SecondaryButton content="More about me" link="#about" />
          </div>
        </div>
        <div className="pt-6 md:max-w-lg">
          <img
            src={illustration}
            alt="Illustration of Nik at a computer creating data visualizations"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
