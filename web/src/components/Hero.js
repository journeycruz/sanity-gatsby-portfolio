import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "gatsby";
// import { motion } from 'framer-motion';

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
          <div className="m-auto z-10">
            <div className="container bg-transparent m-auto grid place-items-center rounded-md pt-10 pb-20 px-7 mt-11">
              <div>
                <div>
                  <div className="text-center m-auto">
                    <span>Journey Cruz - Web Developer</span>
                    <h1 className="font-extrabold text-4xl leading-normal pt-4 pb-5 sm:leading-relaxed">
                      Developing Easy-To-Use
                      <span className="text-indigo-600"> Websites & Applications</span>
                    </h1>
                    <Link to="/archive/">
                      <button className="mt-6 px-8 py-4 rounded-lg font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out mx-7">
                        Browse Projects
                      </button>
                    </Link>
                    <button className="mt-6 mx-7 px-5 py-4 rounded-lg font-normal tracking-wide bg-gradient-to-b from-blue-500 to-blue-600 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-600 transition duration-200 ease-in-out">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
