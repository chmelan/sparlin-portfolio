import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { FaLinkedinIn, FaKaggle } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

import resume from "../public/Nik Sparlin Resume.pdf";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: resume, openInNewTab: true },
  { name: "Contact", href: "#contact" },
];

export default function TopNav() {
  return (
    <div className="absolute bg-transparent	z-50 w-full" id="top">
      <div className="relative pt-6 pb-16 sm:pb-24 ">
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto w-full flex items-center justify-between px-6 sm:px-6 "
            aria-label="Global"
          >
            <div className="flex items-end flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/" className=" text-neutral-800  text-2xl  font-bold">
                  Nik Sparlin
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-neutral-800 hover:bg-rose-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-rose-600 ">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className=" font-mono text-md text-neutral-800 hover:text-neutral-700"
                    target={link.openInNewTab ? "_blank" : undefined}
                    rel={link.openInNewTab ? "noreferrer" : undefined}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-center space-x-6 md:order-2">
              <a
                href="https://www.linkedin.com/in/nik-sparlin/"
                className="text-neutral-700 hover:text-rose-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://public.tableau.com/app/profile/nik.sparlin"
                className="text-neutral-700 hover:text-rose-600 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Tableau</span>
                <SiTableau className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.kaggle.com/niksparlin"
                className="text-neutral-700 hover:text-rose-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Kaggle</span>
                <FaKaggle className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </nav>

          {/* MOBILE HEADER ---------------------------------------------------------------------------------------------------------------------------------*/}

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-1 transition transform origin-top-right md:hidden z-75"
            >
              <div className="pt-1 rounded-lg border border-rose-700  bg-rose-900 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <a href="/" className="  text-white text-2xl  font-bold">
                      Nik Sparlin
                    </a>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="   rounded  p-2 inline-flex items-center justify-center text-white hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-neutral-900 hover:bg-neutral-50"
                      target={link.openInNewTab ? "_blank" : undefined}
                      rel={link.openInNewTab ? "noreferrer" : undefined}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
