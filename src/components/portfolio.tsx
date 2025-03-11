"use client";

import React from "react";
import { motion } from "framer-motion";
import Projects from "@/components/projects";

const Portfolio: React.FC = () => {
  return (
    <motion.section
      id="portfolio"
      className="section bg-primary min-h-[1400px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
            Here are some personal projects I've worked on using MERN technology and API integrations.
          </p>
        </div>
        <Projects />
      </div>
    </motion.section>
  );
};

export default Portfolio;
