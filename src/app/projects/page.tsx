"use client";

import React from "react";
import Header from "@/components/header";
import Projects from "@/components/list/projects";
import Footer from "@/components/footer";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-tertiary min-h-screen py-20">
        <section className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold pb-4">
              List of Projects
            </h1>
            <p className="text-lg md:text-xl text-paragraph">
              Here are the projects I've worked on using various technologies and frameworks.
            </p>
          </div>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
