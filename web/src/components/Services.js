import React, { Component } from "react";
import {
  FiSmartphone,
  FiHardDrive,
  FiDatabase,
  FiCloud,
  FiCheckSquare,
  FiDollarSign,
} from "react-icons/fi";
import './_service.scss';

const ServiceList = [
  {
    icon: <FiSmartphone />,
    title: "Mobile First Website Development",
    description:
      "Bring your app ideas to life with a website that is both fast and responsive.",
  },
  {
    icon: <FiHardDrive />,
    title: "API Creation & Integration",
    description: "REST and SOAP API integration using Node.js and Postman.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Design",
    description:
      "Database architectures in MongoDB and MySQL with Mongoose and Sequelize ORMs.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud Integration",
    description:
      "Deployment of MERN Stack applications using cloud platforms such as Heroku and AWS.",
  },
  {
    icon: <FiDollarSign />,
    title: "E-commerce",
    description:
      "Integration with PayPal and Stripe using the most popular e-commerce platforms such as Shopify, Webflow, and Wix.",
  },
  {
    icon: <FiCheckSquare />,
    title: "Software Testing",
    description:
      "Test writing for optimized software performance using Jest and Node.js.",
  },
];

class Services extends Component {
  render() {
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="text-center w-full" id='services'>
          <div>
            <div>
              <div className="text-4xl font-semibold mb-20">
                <h2>Services:</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-3 m-auto md:grid-cols-2 sm:grid-cols-1 lg:mx-36 md:mx-7 sm:mx-7 mb-20'>
          {ServiceContent.map((val, i) => (
            <div className='rounded-2xl border-black' key={i}>
              <span>
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Services;
