import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";

const SlideList = [
  {
    category: "from San Antonio, TX."
  }
];

const loopIntervals = [1000, 1000, 1000, 1000, 5000];

class Hero extends Component {
  render() {
    return (
      <div className="relative w-full h-screen md:max-h-96">
        <div className="w-full h-screen md:max-h-96 absolute top-0 left-0">
          <Particles
            className="absolute h-screen z-10 md:max-h-96 w-full"
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
                      width: 25
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
                    size_min: 10,
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
            <div
              className="m-auto slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center rn-slider-height z-50 sm: mx-7"
              key={index}
            >
              <div className="container w-full grid place-items-center m-auto">
                <div>
                  <div>
                    <div className="text-left m-auto">
                      <h1 className="title text-4xl text-gray-800 uppercase font-extrabold leading-loose">
                        Journey Cruz <br />
                        <TextLoop
                          springConfig={{ stiffness: 180, damping: 8 }}
                          delay="1000"
                          interval={loopIntervals}
                        >
                          <span className="text-indigo-600">MongoDB&nbsp;</span>
                          <span className="text-indigo-600">Express.js&nbsp;</span>
                          <span className="text-indigo-600">React.js&nbsp;</span>
                          <span className="text-indigo-600">Node.js&nbsp;</span>
                          <span className="text-indigo-600">Full-Stack&nbsp;</span>
                        </TextLoop>
                        Developer
                        <br />
                        from San Antonio, TX
                      </h1>
                      <span id="welcome">Welcome To My Portfolio</span>
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
