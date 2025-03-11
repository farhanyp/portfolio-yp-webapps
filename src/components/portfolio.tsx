"use client";

import React from "react";
import { motion } from "framer-motion";
import Projects from "@/components/projects";
import Link from "next/link";

const Portfolio: React.FC = () => {
  return (
    <motion.section
      id="portfolio"
      className="section bg-primary"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-50 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
          three projects that I recently worked on
          </p>
        </div>
        <Projects />
        <Link href="/projects">
          <p className="text-xl text-center hover:opacity-50 transition-all text-body">click here if you want see more.....</p>
        </Link>
      </div>
    </motion.section>
  );
};

export default Portfolio;
