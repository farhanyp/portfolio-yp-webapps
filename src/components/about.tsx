"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ilustration from "/assets/img/ilustration.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-24">
        <div>
          <div className="relative h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl">
              <Image
                src="/assets/img/ilustration.jpg"
                alt=""
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 566px) 100vw, 566px"
              />
          </div>
          </div>
          <div>
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Farhan Yudha Pratama
              </h2>
              <p className="mb-4 text-accent">Backend Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              I’m Farhan Yudha Pratama, a Backend Developer passionate about building robust and scalable systems. With 3 years of experience, I specialize in Golang, Node.js, and Laravel. I thrive on solving complex problems and creating efficient, high-performance solutions. Continuously learning and adapting to new technologies is at the core of my work ethic. I enjoy turning ideas into functional, backend-driven digital experiences. Let’s connect and create something impactful together!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;