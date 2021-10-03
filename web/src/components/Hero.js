import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";
// import { motion } from 'framer-motion';

class Hero extends Component {
  render() {
    return (
      <div className="relative w-full h-screen">
        <div className="w-full h-screen absolute top-0 left-0">
          <Particles
            className="absolute h-screen z-10 w-full"
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
                    speed: 4,
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
        <div className="bg-gradient-to-b from-white to-gray-100 grid place-items-start m-auto h-full z-50">
          <div className="m-auto z-50 mx-7">
            <div className="container w-full m-auto lg:ml-14 sm:grid sm:place-items-center bg-white rounded-md px-5 py-10 shadow-lg">
              <div>
                <div>
                  <div className="text-left m-auto">
                    <span>Journey Cruz - Web Developer</span>
                    <h1 className="font-extrabold text-4xl leading-normal pt-4 pb-5 sm:leading-relaxed">
                      Combining Data Driven Development
                      <br /> With Elegant, Modern <span className="text-indigo-600">Style</span>
                    </h1>
                  </div>
                  <button className="mt-6 px-8 py-4 rounded-lg font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                    Browse Projects
                  </button>
                  <button className="mt-6 sm:ml-0 md:ml-6 px-8 py-4 rounded-lg font-normal tracking-wide bg-gradient-to-b from-blue-500 to-blue-600 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-600 transition duration-200 ease-in-out">
                    Download Resume
                  </button>
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
