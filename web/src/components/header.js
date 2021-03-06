// import { Link } from "gatsby";
import React, { Fragment } from "react";
import { Link } from "gatsby";
// import Icon from "./icon";
// import { cn } from "../lib/helpers";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
// import * as styles from "./header.module.css";

const navigation = [
  { name: "About", href: "/", current: false },
  { name: "Projects", href: "/archive/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => (
  <Disclosure as="nav" className="bg-black fixed w-screen z-50 shadow-md">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src="https://i.ibb.co/vYDNbd8/JC.png"
                  alt="JC"
                />
              </Link>
              <Link to="/">
                <img
                  className="hidden lg:block h-10 w-auto"
                  src="https://i.ibb.co/vYDNbd8/JC.png"
                  alt="JC"
                />
              </Link>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-black p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative z-50">
                <div>
                  <Menu.Button className="bg-black flex text-sm rounded-full focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://i.ibb.co/xJDFfS6/journeypfp.png"
                      alt="Journey"
                    />
                    <ChevronDownIcon
                      className="text-gray-400 my-auto mx-1 h-3 w-3 hover:text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="https://www.linkedin.com/in/journeycruz/"
                          target="_blank"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          LinkedIn
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          target="_blank"
                          to="https://github.com/journeycruz"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          GitHub
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Disclosure.Panel className="static sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-black text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
);

export default Header;
