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

          <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
            <div>
              <label for="text" class="sr-only">
                Name
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-gray-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative  space-x-2 h-full bg-white hover:bg-green-50 rounded-xl border-2 border-gray-600 ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  />
                </div>
              </div>
            </div>

            <div>
              <label for="email" class="sr-only">
                Email
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-gray-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative  space-x-2 h-full bg-white hover:bg-green-50 rounded-xl border-2 border-gray-600 ">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  />
                </div>
              </div>
            </div>
            <div>
              <label for="message" class="sr-only">
                Message
              </label>

              <div className="group block relative text-black">
                <span className="absolute inset-0 bg-gray-600 rounded-xl translate-x-1 translate-y-1"></span>
                <div className="flex relative  space-x-2 h-full bg-white hover:bg-green-50 rounded-xl border-2 border-gray-600 ">
                  <input
                    type="text area"
                    placeholder="Name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  />
                </div>
              </div>
            </div>

            {/* Submit button ---------------------------------------- */}
            <div class="flex items-center justify-end">
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

        {/* Form test */}

        <form
          action="#"
          method="POST"
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-warm-gray-900"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Message
              </label>
              <span id="message-max" className="text-sm text-warm-gray-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                aria-describedby="message-max"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>

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
