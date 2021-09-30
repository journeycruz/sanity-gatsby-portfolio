import React from "react";
import TextLoop from "react-text-loop";
import { Component } from "react";
import Particles from "react-particles-js";
// import { withRouter } from 'react-router-dom';

const SlideList = [
  {
    category: "from San Antonio, TX."
  }
];

const loopIntervals = [1000, 1000, 1000, 1000, 5000];

class Hero extends Component {
  render() {
    return (
      <div className="relative w-full h-screen md:max-h-96" id="home">
        <div className="w-full h-screen md:max-h-96 absolute top-0 left-0">
          <Particles
            className="absolute h-screen z-10 md:max-h-96 w-full"
            params={{
              particles: {
                number: {
                  value: 8,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  speed: 4,
                  out_mode: "out"
                },
                shape: {
                  type: ["image"],
                  image: [
                    {
                      src: "../static/aws-logo.png",
                      height: 20,
                      width: 25
                    },
                    {
                      src: "../static/react-logo.png",
                      height: 20
                    },
                    {
                      src: "../static/npm-logo.png",
                      height: 20,
                      width: 30
                    },
                    {
                      src: "../static/bootstraplogo.png",
                      height: 20,
                      width: 20
                    },
                    {
                      src: "../static/handlebars-js.png",
                      height: 20,
                      width: 30
                    },
                    {
                      src: "../static/heroku-logotype-horizontal-purple.png",
                      height: 20,
                      width: 60
                    },
                    {
                      src: "../static/rapidAPIlogo.png",
                      height: 20,
                      width: 50
                    }
                  ]
                },
                size: {
                  value: 30,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 7,
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
          <div className="bg-white grid place-items-center m-auto h-full">
            <div
              className="m-auto slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center rn-slider-height z-50 sm: mx-7"
              key={index}
            >
              <div className="container w-full grid place-items-center m-auto">
                <div>
                  <div>
                    <div className="text-left pt-24 sm:pt-16 md:pt-8 m-auto">
                      <h1 className="title text-4xl  uppercase font-black leading-loose">
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
