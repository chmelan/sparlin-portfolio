import { FaLinkedinIn, FaKaggle } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

function Footer() {
  return (
    <footer className="text-white bg-rose-600" id="contact">
      <div className="px-4 pt-8 md:pt-32 pb-4 mx-auto max-w-screen-xl lg:px-8">
        <div className="max-w-screen-xl py-8 mx-auto lg:px-8">
          <div className="max-w-xl mx-auto md:text-center text-left">
            <h2 className="text-5xl font-semibold ">Let's work together!</h2>

            <p className="mt-4 text-neutral-100 font-mono">
              Interested in collaborating? I'd love to talk more. Feel free to
              contact me through LinkedIn or the form below, and I'll be in
              touch shortly.
            </p>
          </div>
          {/* Form ----------------------------- */}
          <form
            action=""
            method="POST"
            className="max-w-xl mx-auto mt-8 mb-0 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-neutral-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative   h-full bg-white hover:bg-green-50 rounded-xl border-2 border-neutral-600 ">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    className="w-full p-4 pr-12 font-mono border-neutral-200 rounded-lg shadow-sm "
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-neutral-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative   h-full bg-white hover:bg-green-50 rounded-xl border-2 border-neutral-600 ">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                    className="w-full p-4 pr-12 font-mono border-neutral-200 rounded-lg shadow-sm "
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-neutral-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative h-full bg-white hover:bg-green-50 rounded-xl border-2 border-neutral-600 ">
                  <textarea
                    id="message"
                    name="message"
                    type="text area"
                    placeholder="Message"
                    className="w-full p-4 pr-12 font-mono border-neutral-200 rounded-lg shadow-sm "
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit button ---------------------------------------- */}
            <div className="flex items-center justify-end ">
              <button
                className="group block relative text-black "
                type="submit"
              >
                <span className="absolute inset-0 bg-emerald-400  rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative  py-2 px-5 space-x-2 h-full bg-white hover:bg-green-50 rounded-xl border-2 border-emerald-400 transition ease-in-out hover:translate-x-1 hover:translate-y-1	">
                  <span className="font-semibold">Send a message</span>
                </div>
              </button>
            </div>
          </form>
        </div>
        {/* Additional footer content ------------------------------------------------------------*/}
        <div className="flex pt-12  justify-between items-end">
          <nav className="flex md:justify-center space-x-4 font-semibold justify-start">
            <a href="#top" className="hover:opacity-75">
              Back to top
            </a>
            <a href="#about" className="hover:opacity-75">
              About
            </a>
            <a href="#projects" className="hover:opacity-75">
              Projects
            </a>
          </nav>

          <div className=" flex justify-center md:space-x-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/nik-sparlin/"
              className="text-white hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn
                className="h-6 w-6  md:h-10 md:w-10"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://public.tableau.com/app/profile/nik.sparlin"
              className="text-white hover:opacity-75 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Tableau</span>
              <SiTableau
                className="h-6 w-6  md:h-10 md:w-10"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.kaggle.com/niksparlin"
              className="text-white hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Kaggle</span>
              <FaKaggle
                className="h-6 w-6  md:h-10 md:w-10"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <p className=" text-center font-mono mt-4 pt-2  border-t border-white/25">
          Made with ♥ by{" "}
          <a
            href="https://www.nickbuildsthings.dev/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-75"
          >
            Nick Chmela
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
