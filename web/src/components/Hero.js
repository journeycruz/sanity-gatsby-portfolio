import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "gatsby";
// import { motion } from 'framer-motion';
import * as styles from "./hero.module.css";

const loopIntervals = [1000, 1000, 1000, 1000, 5000];

class Hero extends Component {
  render() {
    return (
      <div className="relative w-full h-screen">
        <div className="w-full h-screen absolute top-0 left-0">
          <Particles
            className="absolute h-screen z-5 w-full"
            params={{
              particles: {
                number: {
                  value: 15,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  speed: 1,
                  out_mode: "out"
                },
                shape: {
                  type: ["image", "circle"],
                  image: [
                    {
                      src: "https://cdn.cdnlogo.com/logos/r/63/react.svg",
                      height: 20,
                      width: 18
                    },
                    {
                      src: "https://cdn.cdnlogo.com/logos/v/83/vs-code.svg",
                      height: 20,
                      width: 25
                    }
                  ]
                },
                color: {
                  value: "#CCC"
                },
                size: {
                  value: 30,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 3,
                    size_min: 5,
                    size_max: 10,
                    sync: false
                  }
                }
              },
              retina_detect: false
            }}
          />
        </div>
        <div className="bg-white grid place-items-center m-auto h-full z-9 px-7">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-10">
            <div class="sm:text-center lg:text-left">
              {/* <h1 class="text-4xl tracking-normal font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Web Development to enrich your</span>
                <span class="block text-teal xl:inline"> online business</span>
              </h1> */}
              <h1 className="text-3xl tracking-normal font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Journey Cruz <br />
                <TextLoop
                  springConfig={{ stiffness: 180, damping: 8 }}
                  delay="1000"
                  interval={loopIntervals}
                >
                  <span className="text-teal">MongoDB&nbsp;</span>
                  <span className="text-teal">Express.js&nbsp;</span>
                  <span className="text-teal">React.js&nbsp;</span>
                  <span className="text-teal">Node.js&nbsp;</span>
                  <span className="text-teal">Full-Stack&nbsp;</span>
                </TextLoop>
                Developer
                <br />
                From San Antonio, TX
              </h1>
              <p className={styles.subtitle}>Welcome to my portfolio</p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <Link
                    to="/archive/"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal hover:bg-teal-500 focus:bg-teal-900 md:py-4 md:text-lg md:px-10"
                  >
                    View Work
                  </Link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/#contact"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-gray-100 hover:bg-gray-200 hover:text-teal focus:bg-black focus:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Hero;
