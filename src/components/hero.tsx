"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 lg:items-center overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center"
          >
            <p className="text-lg text-accent mb-[22px]">
              Hey, I'm Farhan Yudha Pratama
            </p>
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl md:leading-tight lg:text-center lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I'm a Backend Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center">
              I have 3 years of experience as a Backend Developer, specializing in Golang, Node.js, and Laravel.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                <a href="/assets/CV_Farhan_Yudha_Pratama.pdf" download="CV_Farhan_Yudha_Pratama.pdf">
                    Download CV
                </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
