import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./_tabs.scss";

class AboutTabs extends Component {
  render() {
    let tab1 = "Experience",
      tab2 = "Work History",
      tab3 = "Education";
    return (
      <div className="bg-gray-100" id="about">
        {/* <svg
          className="transform sm:-translate-y-12 lg:-translate-y-12 xl:-translate-y-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
        >
          <path
            fill="#f3f4f6"
            fill-opacity="1"
            d="M0,64L120,53.3C240,43,480,21,720,21.3C960,21,1200,43,1320,53.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg> */}
        <div className="text-center">
          <div className="text-4xl font-semibold mb-12 mt-20">About:</div>
          <div className="text-gray-500 mb-20 px-16">
            Journey is an innovative web developer with a keen problem solving talent. He is a
            creative Full-Stack Developer adept at building responsive websites and a has a natural
            eye for design that meets a customer's experience needs. Specializing in collaborating
            with ecommerce customers to gather requirements, produce plans, and improve designs for
            usability and functionality. Fully proficient in JavaScript, Bootstrap, and React.
            Journey's technical experience, work ethic, and diligence make him an advantageous
            candidate for any development team.
          </div>
        </div>
        <div className="tabs-area">
          <div className="container m-auto">
            <div className="px-7">
              <div className="text-center">
                <Tabs>
                  <TabList className="tab-style--1">
                    <Tab className="pt-4">{tab1}</Tab>
                    <Tab className="pt-4">{tab2}</Tab>
                    <Tab className="pt-4">{tab3}</Tab>
                  </TabList>
                  <div className="space"></div>
                  <TabPanel>
                    <div className="tabContainer px-7">
                      <div className="single-tab-content mx-7 mt-7">
                        <ul>
                          <li className="text-center pb-7">
                            Proficient in the following technologies and software:
                          </li>
                        </ul>
                        <div>
                          <ul className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-center mt-10">
                            <li>
                              <a
                                href="https://www.javascript.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/T2JVRnt/html5-logo-31816.png"
                                  alt="HTML, CSS, Javascript"
                                />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a
                                href="https://jquery.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-10"
                                  src="https://i.ibb.co/5rJwLr5/jquery-1-logo-png-transparent.png"
                                  alt="jQuery"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://git-scm.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img className="h-12" src="https://i.ibb.co/c84Z2b7/gitlogoorange.png" alt="Git" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://getbootstrap.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-16"
                                  src="https://i.ibb.co/WH2gL6y/bootstraplogolong.png"
                                  alt="Bootstrap"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://expressjs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/jhBVRjW/express-logo.png"
                                  alt="Express"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://rapidapi.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/PM7Pzqj/rapid-APIlogo.png"
                                  alt="RapidAPI"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.postman.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/Zzn3XT0/postman-logo.png"
                                  alt="Postman"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://json5.org/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-8 my-auto"
                                  src="https://i.ibb.co/dPXsFYY/json-5-logo-png-transparent.png"
                                  alt="JSON"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.mysql.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img className="h-16" src="https://i.ibb.co/tsMgWnf/mysql-logo.png" alt="MySQL" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.mongodb.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/RB3Lkrv/mongodblogo.png"
                                  alt="MongoDB"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://reactjs.org/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img className="h-16" src="https://i.ibb.co/dDMH1jw/react-logo.png" alt="React" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://nodejs.org/en/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img className="h-14" src="https://i.ibb.co/Hp88cYL/nodejs-logo.png" alt="Node" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.heroku.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-16"
                                  src="https://i.ibb.co/R24vZYp/heroku-logotype-horizontal-purple.png"
                                  alt="Heroku"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://aws.amazon.com/free/?trk=ps_a131L0000085EJuQAM&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_US&sc_publisher=google&sc_category=core-main&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=amazon%20web%20services&sc_content=Brand_amazon_web_services_e&sc_segment=423740514695&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core-Main|Core|US|EN|Text&s_kwcid=AL!4422!3!423740514695!e!!g!!amazon%20web%20services&ef_id=EAIaIQobChMIqfii1pP88QIVdm1vBB1BJwqTEAAYASAAEgLAO_D_BwE:G:s&s_kwcid=AL!4422!3!423740514695!e!!g!!amazon%20web%20services&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-14"
                                  src="https://i.ibb.co/F8hWWF6/aws-logo.png"
                                  alt="Amazon Web Services"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://mongoosejs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/TmxhXSS/mongoose-logo.png"
                                  alt="Mongoose"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://handlebarsjs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-16"
                                  src="https://i.ibb.co/41yLFLW/handlebars-js.png"
                                  alt="Handlebars"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.npmjs.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img className="h-10" src="https://i.ibb.co/h9kCbTT/npm-logo.png" alt="NPM" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://jestjs.io/"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img
                                  className="h-12"
                                  src="https://i.ibb.co/drhc9p2/jest-logo-png-transparent.png"
                                  alt="Jest"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content mt-7">
                      <div className="col-md-12"></div>
                      <ul>
                        <li>
                          <a
                            href="https://www.cyanbirddesigns.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <img
                              src="https://i.ibb.co/wg3nGmV/cbd-logo.jpg"
                              alt="Cyan Bird Designs"
                              id="cbdLogo"
                            />
                          </a>
                        </li>
                        <br />
                        <li>Frontend Developer - Cyan Bird Designs</li>
                        <li> 2019 - Current</li>
                        <li>
                          Communicated with product managers and UX designers to translate project
                          requirements and business objectives into polished User Interfaces.
                          Improved and expanded project platforms using JavaScript to develop rich
                          UIs. Developed Application UIs via emerging Front End Technologies such as
                          React and SASS. Identified, documented, and reported on technical factors
                          impacting interface performance. Collaborated with design team to
                          integrate UI features complying with prescribed code standards and
                          technical design guidelines. Designed UIs with frontend web frameworks
                          such as Bootstrap and React, exploiting associated templates and tools to
                          shorten development times.
                        </li>
                        <br></br>
                      </ul>
                      <div className="col-md-12"></div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content mt-7">
                      <ul>
                        <li>
                          Coding Bootcamp - University of Texas At San Antonio - September, 2020
                        </li>
                        <img
                          className='lg:w-1/2 mx-auto'
                          src="https://i.ibb.co/fk9PrtH/coding-certificate.jpg"
                          alt="coding_certificate"
                        />
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default AboutTabs;
