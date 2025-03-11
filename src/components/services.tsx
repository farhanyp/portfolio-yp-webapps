"use client";

import React from "react";
import { FiCode, FiSettings } from "react-icons/fi";

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <FiCode />,
    name: "Backend Development",
    description:
      "I specialize in building robust, scalable, and secure backend systems using technologies like Golang, Node.js, Laravel, and Express.js. From designing efficient APIs to optimizing database performance, I ensure your application's core functionality is reliable and high-performing.",
  },
  {
    icon: <FiSettings />,
    name: "API Development & Integration",
    description:
      "I design and integrate RESTful APIs to connect your application with third-party services or internal systems. From payment gateways like Stripe to custom data retrieval APIs, I ensure smooth communication and functionality across your platform.",
  },
];

const Services: React.FC = () => {
  return (
    <div>
      <section id="services" className="section bg-tertiary">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
              What I do for clients
            </h2>
            <p className="subtitle">
              Here's something to offer my prospective clients
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]">
                  {service.icon}
                </div>
                <h4 className="text-xl font-medium mb-2 text-start">{service.name}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
