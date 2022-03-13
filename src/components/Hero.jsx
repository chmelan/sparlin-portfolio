import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
import illustration from "../public/Website_Illustration_HQ-01.png";

function Hero() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className="relative ">
      <div className="relative px-4 pt-32 md:pb-64  pb-48 mx-auto max-w-screen-xl lg:flex lg:items-center lg:min-h-screen">
        <div className="max-w-xl sm:text-center text-left">
          <h1 className="text-3xl font-semibold sm:text-5xl ">
            I&apos;m a Graphic Designer turned
            <span className="text-rose-700  "> Data Analyst </span>
            who&apos;s learning to get a little better every day.
          </h1>

          <p className="mt-4 max-w-lg font-mono ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center md:justify-center">
            <Button content="View projects" link="#projects" />
            <SecondaryButton content="More about me" link="#about" />
          </div>
        </div>
        <div className="pt-6">
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
