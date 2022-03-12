import Button from "./Button";
import SecondaryButton from "./SecondaryButton";
function Hero() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className="relative ">
      <div className="relative px-4 pt-16 pb-64  mx-auto max-w-screen-xl lg:flex lg:items-center lg:h-screen">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-semibold sm:text-5xl ">
            I&apos;m a Graphic Designer turned
            <span className="text-rose-700  "> Data Analyst </span>
            who&apos;s learning to get a little better every day.
          </h1>

          <p className="mt-4 max-w-lg font-mono sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <Button />
            <SecondaryButton />
          </div>
        </div>
        <div>
          <img
            src="src/public/Website_Illustration_HQ-01.png"
            alt="Illustration of Nik at a computer creating data visualizations"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
