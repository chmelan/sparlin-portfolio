function Footer() {
  return (
    <footer className="text-white bg-rose-600" id="contact">
      <div className="px-4 pt-16 pb-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto md:text-center text-left">
            <h1 class="text-3xl font-semibold md:text-4xl">
              Let's work together!
            </h1>

            <p class="mt-4 text-neutral-200 font-mono">
              Interested in collaborating? I'd love to talk more. Feel free to
              contact me through LinkedIn or the form below, and I'll be in
              touch shortly.
            </p>
          </div>
          {/* Form ----------------------------- */}
          <form
            action=""
            method="POST"
            class="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" class="sr-only">
                Name
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-gray-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative   h-full bg-white hover:bg-green-50 rounded-xl border-2 border-gray-600 ">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" class="sr-only">
                Email
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-gray-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative   h-full bg-white hover:bg-green-50 rounded-xl border-2 border-gray-600 ">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" class="sr-only">
                Message
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-gray-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative h-full bg-white hover:bg-green-50 rounded-xl border-2 border-gray-600 ">
                  <textarea
                    id="message"
                    name="message"
                    type="text area"
                    placeholder="Message"
                    className="w-full p-4 pr-12 text-sm  border-gray-200 rounded-lg shadow-sm "
                  />
                </div>
              </div>
            </div>

            {/* Submit button ---------------------------------------- */}
            <div className="flex items-center justify-end">
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
        <div className="pt-12 mt-32  sm:flex sm:justify-between sm:items-center">
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
          <p className="font-mono mt-4 pt-2  border-t border-white/25">
            Made with ♥ by{" "}
            <a
              href="https://www.nickbuildsthings.dev/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Nick Chmela
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
