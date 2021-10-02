import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";
// import { motion } from 'framer-motion';

const SlideList = [
  {
    category: "from San Antonio, TX."
  }
];

const loopIntervals = [1000, 1000, 1000, 1000, 5000];

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

        {/* Start Single Slide */}
        {SlideList.map(index => (
          <div className="bg-gradient-to-t from-white to-gray-900 grid place-items-center m-auto h-full">
            <div className="m-auto z-50 mx-7" key={index}>
              <div className="container w-full grid place-items-center m-auto">
                <div>
                  <div>
                    <div className="text-left m-auto">
                      <h1 className="font-extrabold text-4xl leading-normal sm:leading-relaxed">
                        Combining data driven development
                        <br /> with elegant, modern <span className="text-indigo-600">style</span>
                      </h1>
                      <span id="welcome">Welcome To My Web Development Portfolio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>
    );
  }
}

export default Hero;
